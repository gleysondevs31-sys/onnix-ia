/**
 * lidUtils.js — Utilitário de Resolução LID ↔ JID
 *
 * No Baileys 7.x, grupos com addressing_mode 'lid' passam o
 * msg.key.participant como um LID (ex: 123456@lid) em vez do JID
 * telefônico (ex: 5511913494837@s.whatsapp.net).
 *
 * Este módulo fornece funções para:
 *  - Detectar se um ID é LID ou JID
 *  - Resolver o JID a partir de um LID usando o banco local de mapeamentos
 *  - Normalizar o sender para sempre retornar JID confiável
 *  - Comparar participantes de grupo independente do formato
 */

import { isLidUser, isPnUser, jidDecode, areJidsSameUser } from '@whiskeysockets/baileys';
import { getUser, getAllUsers } from '../database/users.js';

/**
 * Verifica se um JID é um LID (@lid).
 * @param {string} jid
 * @returns {boolean}
 */
export function isLid(jid) {
  return isLidUser(jid);
}

/**
 * Verifica se um JID é um número de telefone (@s.whatsapp.net).
 * @param {string} jid
 * @returns {boolean}
 */
export function isPn(jid) {
  return isPnUser(jid);
}

/**
 * Extrai o número puro de um JID ou LID (sem domínio, sem device).
 * Ex: "5511913494837:2@s.whatsapp.net" → "5511913494837"
 *     "123456789@lid" → "123456789"
 * @param {string} jid
 * @returns {string}
 */
export function extractUser(jid) {
  if (!jid) return '';
  return jid.split('@')[0].split(':')[0];
}

/**
 * Resolve o JID (@s.whatsapp.net) a partir de um LID (@lid)
 * consultando o banco de dados local de mapeamentos (src/database/data/users/).
 *
 * Retorna null se o mapeamento não for encontrado (usuário ainda não
 * enviou nenhuma mensagem para o bot ser registrado).
 *
 * @param {string} lid  — ex: "123456789@lid"
 * @returns {string|null}  — ex: "5511913494837@s.whatsapp.net" ou null
 */
export function resolveJidFromLid(lid) {
  if (!lid || !isLidUser(lid)) return null;
  const lidKey = extractUser(lid) + '@lid';
  const userData = getUser(lidKey, 'lid');
  if (userData?.jid) return userData.jid;
  return null;
}

/**
 * Resolve o LID (@lid) a partir de um JID (@s.whatsapp.net)
 * consultando o banco de dados local.
 *
 * @param {string} jid  — ex: "5511913494837@s.whatsapp.net"
 * @returns {string|null}  — ex: "123456789@lid" ou null
 */
export function resolveLidFromJid(jid) {
  if (!jid || !isPnUser(jid)) return null;
  const pn = extractUser(jid) + '@s.whatsapp.net';
  const userData = getUser(pn, 'jid');
  if (userData?.lid) return userData.lid;
  return null;
}

/**
 * Normaliza o sender de uma mensagem para sempre retornar um JID
 * (@s.whatsapp.net), independente de o grupo usar LID ou PN.
 *
 * Lógica de prioridade:
 *  1. Se participant é JID → usa diretamente
 *  2. Se participant é LID → tenta resolver via banco local
 *  3. Se participantAlt existe e é JID → usa como fallback
 *  4. Caso nenhum funcione → retorna o participant original (LID)
 *
 * @param {object} msg  — objeto de mensagem do Baileys
 * @returns {string}    — JID normalizado ou LID como fallback
 */
export function resolveSenderJid(msg) {
  const isGroup = msg.key?.remoteJid?.endsWith('@g.us');

  if (!isGroup) {
    // Em chat privado o remoteJid já é o JID do usuário
    const raw = msg.key?.remoteJid || '';
    return extractUser(raw) + '@s.whatsapp.net';
  }

  const participant = msg.key?.participant || '';
  const participantAlt = msg.key?.participantAlt || '';

  // Caso 1: participant já é JID telefônico
  if (isPnUser(participant)) {
    return extractUser(participant) + '@s.whatsapp.net';
  }

  // Caso 2: participant é LID — tenta resolver via banco
  if (isLidUser(participant)) {
    const resolved = resolveJidFromLid(participant);
    if (resolved) return resolved;

    // Caso 3: participantAlt contém o JID (Baileys envia como senderAlt)
    if (participantAlt && isPnUser(participantAlt)) {
      return extractUser(participantAlt) + '@s.whatsapp.net';
    }

    // Fallback: retorna o LID mesmo (sem conversão)
    return participant;
  }

  return participant;
}

/**
 * Verifica se dois IDs (JID ou LID) representam o mesmo usuário.
 * Usa a função nativa do Baileys que compara apenas o campo `user`
 * ignorando device e domínio.
 *
 * @param {string} id1
 * @param {string} id2
 * @returns {boolean}
 */
export function isSameUser(id1, id2) {
  if (!id1 || !id2) return false;
  // Comparação direta de número puro (mais robusta para cross-domain LID/JID)
  return extractUser(id1) === extractUser(id2);
}

/**
 * Encontra um participante na lista de metadados do grupo
 * independente de o grupo usar LID ou JID como p.id.
 *
 * O Baileys 7.x retorna participants com:
 *   - p.id: JID (@s.whatsapp.net) se grupo usa PN-mode
 *   - p.id: LID (@lid) se grupo usa LID-mode
 *   - p.lid: LID alternativo (quando p.id é JID)
 *   - p.phoneNumber: JID alternativo (quando p.id é LID)
 *
 * @param {Array}  participants  — groupMetadata.participants
 * @param {string} targetId      — JID ou LID do usuário a encontrar
 * @returns {object|null}        — objeto do participante ou null
 */
export function findParticipant(participants, targetId) {
  if (!participants || !targetId) return null;

  const targetUser = extractUser(targetId);

  return participants.find(p => {
    // Comparação direta
    if (extractUser(p.id) === targetUser) return true;
    // Comparação via campo lid alternativo
    if (p.lid && extractUser(p.lid) === targetUser) return true;
    // Comparação via campo phoneNumber alternativo
    if (p.phoneNumber && extractUser(p.phoneNumber) === targetUser) return true;
    return false;
  }) || null;
}

/**
 * Verifica se um usuário é admin do grupo, suportando LID e JID.
 *
 * @param {Array}  participants  — groupMetadata.participants
 * @param {string} userId        — JID ou LID do usuário
 * @returns {boolean}
 */
export function isParticipantAdmin(participants, userId) {
  const p = findParticipant(participants, userId);
  return p?.admin === 'admin' || p?.admin === 'superadmin';
}

/**
 * Verifica se um userId (JID ou LID) está na lista de admins/owners
 * do config.json, fazendo comparação por número puro.
 *
 * @param {string}   userId   — JID ou LID do remetente
 * @param {string[]} list     — Array de JIDs do config (admins, owners, etc.)
 * @returns {boolean}
 */
export function isInConfigList(userId, list) {
  if (!Array.isArray(list) || !userId) return false;
  const userNum = extractUser(userId);
  return list.some(entry => extractUser(entry) === userNum);
}

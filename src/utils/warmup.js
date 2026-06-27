// Lista focada em criar interações bilaterais fortes e diversificação de mídia

const pvChallenges = [
  "📸 *Desafio Visual:* Envie-me agora uma foto aleatória da sua galeria (aquela que ninguém entende por que está lá).",
  "🎙️ *Teste de Voz:* Aperte o botão do microfone e grave um áudio de exatos 5 segundos para mim com um 'Bom dia ONNX IA'!",
  "🤪 *Reação Rápida:* Envie-me a figurinha animada mais engraçada que você tem salva.",
  "📱 *Agenda:* Me mande um contato qualquer da sua agenda que comece com a letra M (só para mantermos as engrenagens ativas).",
  "📝 *Digitador:* Digite o nome da primeira rua que você morou ao responder esta mensagem.",
  "💬 *Diálogo Simulado:* Mande a palavra \"Dúvida\" e depois me faça qualquer pergunta usando o comando /ia",
  "🎵 *Música:* Me mande um pequeno áudio cantarolando ou assoviando sua música favorita."
];

const groupChallenges = [
  "🗣️ *Interação de Grupo:* @mencione a pessoa que enviou a mensagem logo acima da sua e pergunte o que ela almoçou hoje!",
  "🤣 *Torneio de Figurinhas:* Envie respondendo (citando) esta mensagem a figurinha mais sem sentido que você tiver. O resto do grupo tem que reagir!",
  "🎙️ *Comunicação Ativa:* Grave um curto áudio e envie aqui no grupo dizendo: 'Um ótimo dia para todos vocês'.",
  "🔍 *Contato Visual:* Encontre uma foto sua que você adora e envie aqui no grupo.",
  "📥 *Geração de Demanda:* Vá no PV do último membro que enviou mensagem neste grupo e mande um simples 'E aí, tudo bem com você?'.",
  "👋 *Saudação:* Responda a essa mensagem apenas com um emoji que representa seu humor atual."
];

/**
 * Retorna um desafio aleatório focando na melhora da pontuação do número do WhatsApp
 * @param {boolean} isGroup 
 * @returns {string} Texto formatado do desafio
 */
export function getRandomWarmUpChallenge(isGroup) {
  const list = isGroup ? groupChallenges : pvChallenges;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export default { getRandomWarmUpChallenge };

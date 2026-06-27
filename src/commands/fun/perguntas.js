// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';

const PERGUNTAS = [
  "Quem você levaria dessa roda para uma ilha deserta?",
  "O que você faria com 1 milhão de reais agora?",
  "Qual é a sua maior vergonha na vida?",
  "Se você pudesse mudar algo em você, o que seria?",
  "Qual foi o sonho mais estranho que você já teve?",
  "Se hoje fosse o seu último dia de vida, o que você faria?",
  "Biscoito ou bolacha?",
  "Coxinha pela pontinha ou pela bundinha?",
  "O que os olhos não vêem o coração não sente?",
  "Qual foi o pior presente que você já recebeu?",
  "Se o mundo fosse acabar e você pudesse salvar apenas uma pessoa, quem seria?",
  "Qual o seu pior hábito?",
  "É possível morrer de amor?",
  "O que não pode faltar na sua geladeira?",
  "Como foi o seu primeiro beijo?",
  "Você beijou mais de uma pessoa no mesmo dia? Se sim, quantas?",
  "Dormir pelado ou com roupa?",
  "Você ficaria tranquilo se seu histórico do WhatsApp ficasse público agora?",
  "Qual é o seu maior orgulho?",
  "Qual foi o motivo do seu último término?",
  "Para onde você viajaria agora?",
  "Mãe ou pai?",
  "Se você pudesse trazer de volta uma pessoa que já morreu, quem seria?",
  "Se você pudesse mudar algo na história da humanidade, o que mudaria?",
  "Em qual país você gostaria de morar?",
  "Qual animal você gostaria de ser?",
  "Em uma máquina do tempo, para que época você voltaria?",
  "WhatsApp ou Instagram?",
  "Qual é a sua técnica de sedução infalível?",
  "O que te tira do sério?",
  "Se só pudesse salvar uma pessoa dessa sala de um incêndio, quem salvaria?",
  "Qual foi a maior mentira que você já contou?",
  "Bar ou balada?",
  "Qual estilo de música você não suporta?",
  "Já fez xixi na rua?",
  "Qual característica você realmente valoriza em um amigo?",
  "Você acredita em casamento?",
  "O que realmente é muito brega para você?",
  "Já comeu comida que seria jogada fora?",
  "Qual a coisa mais estranha que você ama comer?",
  "O que você gosta de cantar no chuveiro?",
  "Qual é o bicho que você tem mais medo?",
  "Qual é o seu filme preferido?",
  "Você prefere ser rico ou famoso?",
  "Qual a pior mentira que já contaram sobre você?",
  "Quantos dias você já ficou sem tomar banho?",
  "Você participaria do BBB?",
  "Já fez xixi na piscina?",
  "O que te faz ter vontade de fugir para outro planeta?",
  "Já comeu algum inseto?",
  "O que você faria se ganhasse na loteria?",
  "Qual o seu sabor de pizza preferido?",
  "Você acredita em vidas passadas?",
  "Se pudesse ficar invisível, o que observaria?",
  "Qual é a comida que te faz realmente muito feliz?",
  "Qual é sua bebida preferida?",
  "Qual é o prato que você melhor cozinha?",
  "Qual idioma gostaria de aprender?",
  "O cliente tem sempre razão?",
  "O que é que o dinheiro não pode comprar?",
  "Você sabe trocar pneu de carro?",
  "Qual a melhor invenção da face da terra?",
  "Inverno ou verão?",
  "Copa do Mundo ou Jogos Olímpicos?",
  "Qual doença você tem mais medo?",
  "Se pudesse jantar com qualquer pessoa viva ou morta, quem escolheria?",
  "Qual rede social você deletaria se fosse obrigado?",
  "Você já mentiu na entrevista de emprego?",
  "Qual é a sua idade mental?",
  "Se pudesse ter um superpoder, qual escolheria?"
];

export default {
  name: 'perguntas',
  aliases: ['pgt', 'questao', 'pergunta'],
  category: 'fun',
  description: 'Gerador de perguntas aleatórias para animar o grupo!',
  cooldown: 4000,
  
  execute: async (context) => {
    const { sock, msg, jid, pushName } = context;

    const pergunta = PERGUNTAS[Math.floor(Math.random() * PERGUNTAS.length)];

    await messageQueue.enqueue(sock, jid, { 
      text: [
        `❓ *PERGUNTA ALEATÓRIA*`,
        `━━━━━━━━━━━━━━━━━━`,
        ``,
        `${pergunta}`,
        ``,
        `━━━━━━━━━━━━━━━━━━`,
        `💬 Responda aqui embaixo!`,
        ``,
        `_Pedido por: ${pushName}_`,
        `_Próxima: /perguntas_`
      ].join('\n')
    }, { quoted: msg });
  }
};

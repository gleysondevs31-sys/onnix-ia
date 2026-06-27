// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';

const FRASES = [
  "Eu nunca dei em cima do namorado(a) de algum amigo.",
  "Eu nunca disse eu te amo para alguém que eu não amava de verdade.",
  "Nunca me apaixonei à primeira vista.",
  "Eu nunca passei a madrugada mandando mensagem para alguém.",
  "Eu nunca fui ignorado no WhatsApp por alguém que eu gostava.",
  "Nunca peguei carona com estranhos.",
  "Eu nunca fui parado por policiais.",
  "Eu nunca quebrei um osso.",
  "Eu nunca desmaiei na rua.",
  "Eu nunca fiquei obcecado em stalkear alguém nas redes sociais.",
  "Eu nunca fui expulso da sala de aula.",
  "Nunca andei a cavalo.",
  "Eu nunca comecei a ver uma série só para ter assunto.",
  "Eu nunca menti que uma comida estava boa.",
  "Eu nunca usei cueca ou calcinha do avesso.",
  "Eu nunca criei uma conta falsa nas redes sociais.",
  "Eu nunca me afoguei.",
  "Eu nunca coloquei a culpa no cachorro.",
  "Eu nunca experimentei comida de cachorro.",
  "Eu nunca me confessei na igreja.",
  "Eu nunca ouvi música Gospel.",
  "Eu nunca fui em um rodeio.",
  "Eu nunca quebrei um dente.",
  "Nunca roubei algo em uma loja.",
  "Eu nunca tive uma experiência paranormal.",
  "Eu nunca tive algum perfil de rede social hackeado.",
  "Eu nunca pintei o cabelo de alguma cor estranha.",
  "Eu nunca dancei funk no meu quarto sem ninguém ver.",
  "Eu nunca treinei beijo de língua.",
  "Eu nunca cozinhei algo ruim e ofereci para me vingar da pessoa.",
  "Eu nunca colei na prova.",
  "Eu nunca subi em uma árvore.",
  "Eu nunca tentei cortar meu próprio cabelo.",
  "Eu nunca peidei em público.",
  "Eu nunca viajei de avião.",
  "Eu nunca matei aula.",
  "Eu nunca passei mal em um parque de diversões.",
  "Nunca cantei em um karaokê na frente de várias pessoas.",
  "Eu nunca apareci na TV.",
  "Eu nunca me arrependi imediatamente após enviar uma mensagem.",
  "Eu nunca corri da polícia.",
  "Eu nunca menti para os meus pais.",
  "Eu nunca fiz uma aposta arriscada.",
  "Eu nunca dormi no cinema.",
  "Eu nunca mandei mensagem para a pessoa errada.",
  "Eu nunca fingi estar dormindo pra evitar alguém.",
  "Eu nunca stalkei o ex nas redes sociais.",
  "Eu nunca mandei áudio no grupo errado.",
  "Eu nunca fui expulso de um grupo de WhatsApp.",
  "Eu nunca chorei assistindo filme.",
  "Eu nunca tomei banho de chuva na rua.",
  "Eu nunca fingi estar ocupado pra não responder mensagem.",
  "Eu nunca fiz perguntas para a Siri ou Alexa.",
  "Eu nunca ri de alguém caindo na rua.",
  "Eu nunca disse que ia chegar em 5 minutos quando nem tinha saído de casa.",
  "Eu nunca fingi que não vi alguém na rua pra não ter que cumprimentar.",
  "Eu nunca esqueci o nome de alguém logo depois de ter sido apresentado.",
  "Eu nunca cantei no chuveiro fingindo estar num show.",
  "Eu nunca comi algo do chão.",
  "Eu nunca falei sozinho em voz alta."
];

export default {
  name: 'eununca',
  aliases: ['nunca', 'en'],
  category: 'fun',
  description: 'Jogo Eu Nunca — descubra quem já fez o quê!',
  cooldown: 4000,
  
  execute: async (context) => {
    const { sock, msg, jid, pushName } = context;

    const frase = FRASES[Math.floor(Math.random() * FRASES.length)];

    const pollName = `🙈 EU NUNCA...\n\n${frase}\n\nPedido por: ${pushName}`;
    const options = ['✅ Já fiz', '❌ Nunca fiz'];

    await sock.sendMessage(jid, {
      poll: {
        name: pollName,
        values: options,
        selectableCount: 1
      }
    });
  }
};

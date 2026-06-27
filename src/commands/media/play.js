import messageQueue from '../../core/MessageQueue.js';
import youtubeService from '../../services/YouTubeService.js';

export default {
  name: 'play',
  aliases: ['tocar', 'musica', 'song'],
  category: 'media',
  description: 'Busca e envia áudio de músicas do YouTube',
  cooldown: 10000,

  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;

    const query = args.join(' ');

    if (!query) {
      return await messageQueue.enqueue(sock, jid, {
        text: `🎵 *ONNX Player*\n\nUso: /play [nome da música]\n\nExemplo:\n/play Imagine Dragons - Believer`
      }, { quoted: msg });
    }

    await messageQueue.enqueue(sock, jid, { text: `🔍 *Buscando:* _${query}_...` }, { quoted: msg });

    try {
      let targetUrl;
      let title;

      // Se já for uma URL do YouTube, usa direto
      if (youtubeService.isYouTubeUrl(query)) {
        targetUrl = query;
        title = 'YouTube Audio';
      } else {
        // Busca no YouTube
        const results = await youtubeService.searchYT(query);

        if (results.length === 0) {
          return await messageQueue.enqueue(sock, jid, {
            text: `❌ Nenhum resultado encontrado para "${query}".`
          }, { quoted: msg });
        }

        const video = results[0];
        targetUrl = video.url;
        title = video.title;

        await messageQueue.enqueue(sock, jid, {
          image: { url: video.thumbnail },
          caption: `🎶 *${video.title}*\n👤 ${video.channel}\n⏱️ ${video.duration}\n\n⏳ _Convertendo para áudio..._`
        });
      }

      // Download do áudio via API Zero Two
      const audioUrl = `https://zero-two-apis.com.br/api/dl/ytaudio2?url=${targetUrl}&apikey=onnx-ia-key`;

      await messageQueue.enqueue(sock, jid, {
        audio: { url: audioUrl },
        mimetype: 'audio/mpeg',
        ptt: false,
        fileName: `${title}.mp3`
      }, { quoted: msg });

    } catch (error) {
      await messageQueue.enqueue(sock, jid, {
        text: `❌ *Erro ao baixar:* ${error.message}\n\n_Tente outro termo de busca ou tente novamente._`
      }, { quoted: msg });
    }
  }
};

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ffmpeg from 'fluent-ffmpeg';
import { downloadContentFromMessage } from '@whiskeysockets/baileys';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tmpDir = path.join(__dirname, '../../data/tmp');

class StickerService {
  constructor() {
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir, { recursive: true });
    }
  }

  async downloadMedia(message, type) {
    const stream = await downloadContentFromMessage(message, type);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  }

  async createSticker(buffer, isAnimated = false) {
    return new Promise((resolve, reject) => {
      const stamp = Date.now();
      const tmpFileIn = path.join(tmpDir, `in_${stamp}.${isAnimated ? 'mp4' : 'jpg'}`);
      const tmpFileOut = path.join(tmpDir, `out_${stamp}.webp`);
      
      fs.writeFileSync(tmpFileIn, buffer);

      let command = ffmpeg(tmpFileIn)
        .outputOptions([
          '-vcodec', 'libwebp',
          '-vf', "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,format=rgba",
          '-lossless', '1',
          '-loop', '0',
          '-preset', 'default',
          '-an',
          '-vsync', '0'
        ])
        .save(tmpFileOut);

      command.on('end', () => {
        const webpBuffer = fs.readFileSync(tmpFileOut);
        this._cleanup([tmpFileIn, tmpFileOut]);
        resolve(webpBuffer);
      });

      command.on('error', (err) => {
        logger.error('Erro ffmpeg/sticker', err.message);
        this._cleanup([tmpFileIn]);
        reject(err);
      });
    });
  }

  _cleanup(files) {
    for (const f of files) {
      try {
        if (fs.existsSync(f)) fs.unlinkSync(f);
      } catch (e) {}
    }
  }
}

export const stickerService = new StickerService();
export default stickerService;

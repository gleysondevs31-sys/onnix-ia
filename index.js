/**
 * ENTRYPOINT RETRO-COMPATÍVEL V1 
 * Este arquivo serve como wrapper importando o app principal ESM
 * mantendo o bot funcional com scripts e gerenciadores legados.
 */

// Como estamos em ESM ("type": "module"), apenas importamos o app inicializador
import './src/app.js';

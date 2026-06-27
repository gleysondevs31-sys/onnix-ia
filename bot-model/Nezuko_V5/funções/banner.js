const chalk = require("chalk");
const cfonts = require("cfonts");

/**
 * Exibe o banner temático da Nezuko-Bot V5 no terminal.
 * @param {string} userName - Nome do usuário conectado (opcional)
 * @param {string} userId - ID do usuário conectado (opcional)
 */
function exibirBannerNezuko(userName = 'Nezuko Bot', userId = 'N/A') {
    const chalkColors = [
        chalk.red, chalk.green, chalk.yellow, chalk.blue, 
        chalk.magenta, chalk.cyan, chalk.white, chalk.redBright, 
        chalk.greenBright, chalk.yellowBright, chalk.blueBright, 
        chalk.magentaBright, chalk.cyanBright, chalk.whiteBright
    ];
    
    const rC = () => chalkColors[Math.floor(Math.random() * chalkColors.length)];

    const banner = `
        ${rC()('╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮')}
        ${rC()('┃')} ${chalk.magenta.bold('    🌸 BEM-VINDO(A) À NEZUKO-BOT V5! 🌸     ')} ${rC()('┃')}
        ${rC()('┃')} ${chalk.white('  A ONI MAIS FOFA E PODEROSA DO WHATSAPP!   ')} ${rC()('┃')}
        ${rC()('╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯')}

        ${chalk.magenta('🌸')} ${chalk.white.bold('CRIADOR:')} ${chalk.magenta('Daniel')}
        ${chalk.magenta('🌸')} ${chalk.white.bold('CREDITOS:')} ${chalk.magenta('LUCAS MOD DOMINA')}
        ${chalk.magenta('🌸')} ${chalk.white.bold('VERSÃO:')} ${chalk.magenta('5.0.0')}
        ${chalk.magenta('🌸')} ${chalk.white.bold('STATUS:')} ${chalk.green('CONECTADO COM SUCESSO')}
        ${chalk.magenta('🌸')} ${chalk.white.bold('USUÁRIO:')} ${chalk.magenta(userName)}
        ${chalk.magenta('🌸')} ${chalk.white.bold('ID:')} ${chalk.magenta(userId)}
        
        ${rC()('🌟 USE COM RESPONSABILIDADE E DIVIRTA-SE! 🌟')}

        ${rC()('╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮')}
        ${rC()('┃')} ${chalk.magenta(' © 2026 NEZUKO-BOT - TODOS OS DIREITOS 🎋   ')} ${rC()('┃')}
        ${rC()('╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯')}
    `;

    cfonts.say('NEZUKO|V5', {
        font: 'block',
        align: 'center',
        gradient: ['magenta', 'red']
    });

    console.log(banner);
}

module.exports = { exibirBannerNezuko };

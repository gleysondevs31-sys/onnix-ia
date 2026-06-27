/**
 * Formata um número de coins para formato legível:
 * 1000 → 1k | 1000000 → 1m | 1000000000 → 1b | 1000000000000 → 1t
 * @param {number} n
 * @returns {string}
 */
export function formatCoins(n) {
  if (typeof n !== 'number' || isNaN(n)) return '0';
  const abs = Math.abs(n);
  const sign = n < 0 ? '-' : '';

  if (abs >= 1_000_000_000_000) {
    return sign + (abs / 1_000_000_000_000).toFixed(abs % 1_000_000_000_000 === 0 ? 0 : 1).replace(/\.0$/, '') + 't';
  }
  if (abs >= 1_000_000_000) {
    return sign + (abs / 1_000_000_000).toFixed(abs % 1_000_000_000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'b';
  }
  if (abs >= 1_000_000) {
    return sign + (abs / 1_000_000).toFixed(abs % 1_000_000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'm';
  }
  if (abs >= 10_000) {
    return sign + (abs / 1_000).toFixed(abs % 1_000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'k';
  }
  return sign + abs.toLocaleString('pt-BR');
}

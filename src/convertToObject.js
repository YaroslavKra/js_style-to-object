'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedStyles = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const idx = line.indexOf(':');

      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();

      parsedStyles[key.trim()] = value.trim();
    });

  return parsedStyles;
}

module.exports = convertToObject;

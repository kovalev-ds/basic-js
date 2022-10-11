const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2, result = 0) {
  if (s1 === "" || s2 === "") return result;

  const commonIdx = s2.indexOf(s1[0]);

  if (commonIdx > -1) {
    return getCommonCharacterCount(
      s1.slice(1),
      s2.slice(0, commonIdx) + s2.slice(commonIdx + 1),
      result + 1
    );
  }
  return getCommonCharacterCount(s1.slice(1), s2, result);
}

module.exports = {
  getCommonCharacterCount,
};

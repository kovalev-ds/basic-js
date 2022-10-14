const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const array = [...arr];
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    switch (el) {
      case "--double-next":
        array[i + 1] && result.push(array[i + 1]);
        break;
      case "--discard-next":
        array[i + 1] && array.splice(i + 1, 1, null);
        break;

      case "--double-prev":
        array[i - 1] && result.push(result.at(-1));
        break;

      case "--discard-prev":
        array[i - 1] && result.pop();
        break;

      default:
        el && result.push(el);
        break;
    }
  }
  return result;
}

module.exports = {
  transform,
};

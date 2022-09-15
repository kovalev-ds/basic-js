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
  throw new NotImplementedError("Not implemented");

  // const cases = {
  //   "--discard-next": (t, i) => [...t.slice(0, i), ...t.slice(i)],
  //   "--discard-prev": () => [],
  //   "--double-next": () => [],
  //   "--double-prev": () => [],
  // };
  // try {
  //   return arr.reduce((acc, value, i, array) => {
  //     return cases[value]
  //       ? cases[value](acc, value, i, array)
  //       : [...acc, value];
  //   }, []);
  // } catch (error) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }
}

// console.log(
//   transform([1, 2, 3, "--double-next", 4, 5]),
//   " => [1, 2, 3, 4, 4, 5]"
// );

// console.log(transform([1, 2, 3, "--discard-prev", 4, 5]), " => [1, 2, 4, 5]");
// console.log(transform([1, 2, 3, "--discard-next", 4, 5]), " => [1, 2, 3, 5]");

module.exports = {
  transform,
};

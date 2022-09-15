const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
let innerArray = [];

const chainMaker = {
  getLength() {
    return innerArray.length;
  },
  addLink(value) {
    innerArray.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position > 0 &&
      position <= innerArray.length
    ) {
      innerArray.splice(position - 1, 1);
      return chainMaker;
    }
    innerArray = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    innerArray.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = innerArray.join("~~");
    innerArray = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};

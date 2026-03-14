const totalIntegers = function (value, count = 0) {
  for (let obj of value) {
    if (typeof obj === "number") {
      count++;
    }
    if (typeof obj === "object") {
      count += totalIntegers(obj);
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;

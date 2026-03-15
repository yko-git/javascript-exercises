const permutations = function (array) {
  if (array.length === 0) return [[]];
  if (array.length === 1) return [array];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let remainning = array.filter((x) => x !== current);
    let subPermutations = permutations(remainning);
    for (let perm of subPermutations) {
      result.push([current, ...perm]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;

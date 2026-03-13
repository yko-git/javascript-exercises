const contains = function (object, target) {
  for (let obj of Object.values(object.data)) {
    if (Object.values(obj).includes(target)) {
      return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;

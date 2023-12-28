function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  if (typeof obj1 !== typeof obj2 || Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    if (!deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
const isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};
export const deepCompare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepCompare(val1, val2)) ||
      (!areObjects && val1 !== val2)
    )
      return false;
  }
  return true;
};

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const sortBy = (list, field, asc = true) => {
  return list.sort((itemA, itemB) => {
    const x =
      typeof itemA[field] === "string"
        ? itemA[field].toLowerCase()
        : itemA[field];
    const y =
      typeof itemB[field] === "string"
        ? itemB[field].toLowerCase()
        : itemB[field];
    if (x < y) {
      return asc ? -1 : 1;
    }
    if (x > y) {
      return asc ? 1 : -1;
    }
    return 0;
  });
};

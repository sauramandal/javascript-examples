// Implement an Array map polyfill
const numbers = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.customMap = function (fn) {
  let result = [],
    context = this;
  for (let idx = 0; idx < context.length; idx++) {
    if (context.indexOf(context[idx]) > -1) {
      result[idx] = fn(context[idx], idx);
    }
  }
  return result;
};

let ans = numbers.customMap((item, index) => item * 2);
console.log("Custom map elements ->", ans);

Array.prototype.customFilter = function (fn) {
  let result = [],
    context = this;
  for (let idx = 0; idx < context.length; idx++) {
    if (context.indexOf(context[idx]) > -1 && fn(context[idx], idx)) {
      result.push(context[idx]);
    }
  }
  return result;
};

ans = numbers.customFilter((item, index) => item % 2);
console.log("Custom filter elements ->", ans);

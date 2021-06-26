const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let self = this,
      args = arguments;
    timer = setTimeout(() => fn.apply(self, args), delay);
    clearTimeout(timer);
  };
};

const throttle = (fn, delay) => {
  let timer = null,
    shouldExecute = true;
  return function () {
    let self = this,
      args = arguments;
    if (shouldExecute) {
      fn.apply(self, args);
      shouldExecute = false;
      timer = setTimeout(() => {
        shouldExecute = true;
      }, delay);
      clearTimeout(timer);
    }
  };
};

export {debounce, throttle}

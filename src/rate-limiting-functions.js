const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let self = this,
      args = arguments;
    timer = setTimeout(() => fn.apply(self, args), delay);
    clearTimeout(timer);
  };
};

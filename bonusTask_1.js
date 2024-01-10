function bind(fn, context, ...rest) {
  return function(...args) {
    return fn.apply(context, rest.concat(args));
  }
}
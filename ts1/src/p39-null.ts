function returnNull(param: string) {
  return null;
}

function returnUndef(param: string) {
  return undefined;
}

const foo = returnNull("foo");
console.log(foo);

const bar = returnUndef("bar");
console.log(bar);

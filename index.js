function recursive(n) {
  if (n < 3) return 1;
  return recursive(n - 1) + recursive(n - 2);
}

function iterative(n) {
  var vals = [1, 1],
      thisN;

  for (thisN = 2; thisN < n; ++thisN) {
    vals.push(vals.shift() + vals[0]);
  }

  return vals.pop();
}

module.exports = {
  recursive: recursive,
  iterative: iterative
};
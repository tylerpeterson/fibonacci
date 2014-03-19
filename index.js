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

function cachedIterative(n) {
  var sequence = [1, 1];

  while (sequence.length < n) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }

  return sequence[sequence.length - 1];
}

module.exports = {
  recursive: recursive,
  iterative: iterative,
  cachedIterative: cachedIterative
};

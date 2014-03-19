var fib = require('../index'),
    expect = require('chai').expect,
    referenceFibSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34],
    implementationNames = ['recursive', 'iterative', 'cachedIterative'];

implementationNames.forEach(function (implName) {
  describe('the ' + implName + ' implementation', function () {
    referenceFibSequence.forEach(function (referenceValue, index) {
      var n = index + 1; // one based instead of zero based index

      it('should compute fib(' + n + ') as ' + referenceValue, function () {
        expect(fib[implName](n)).to.equal(referenceValue);
      });
    });
  });
});

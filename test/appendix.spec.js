/*eslint func-names:0 */

describe( 'Appendix', function() {
  describe( 'Comma first', function() {
    it( 'should fail when using comma first style', function() {
      var src = 'var first = 1\n' +
      '  , second = 2;\n';

      expect( src ).to.have.eslintErrors([ 'comma-style' ]);
    });
  });
});

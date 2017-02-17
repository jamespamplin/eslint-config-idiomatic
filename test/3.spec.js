/*eslint no-unused-expressions:0, func-names:0 */

describe( '3. Type Checking', function() {

  describe( 'A. Actual Types', function() {

    it( 'should not fail when comparing against null', function() {
      var src = 'variable == null;\n';
      expect( src ).to.not.have.eslintErrors;
    });

    it( 'should not fail when comparing against null (strong type equal)', function() {
      var src = 'variable === null;\n';
      expect( src ).to.not.have.eslintErrors;
    });

  });

});

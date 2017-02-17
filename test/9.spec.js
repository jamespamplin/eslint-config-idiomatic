/*eslint func-names:0 */

describe( '10. Comments', function() {
  it( 'should fail when using end of line comment', function() {
    var src = 'var foo = 1; // bar!\n';

    expect( src ).to.have.eslintErrors([ 'no-inline-comments' ]);
  });
});

module("main Tests",{
	setup: function  () {
		equal( sayHello(), "hello", "one  assert before test");
		this.prop = "foo";
	},
	teardown: function() {
    equal( sayHello(), "hello", "and one extra assert after each test");
  }
});

test( "a basic test example", function() {
	expect( 3 );
	equal( sayHello(this.prop), "hello", "We expect value to be hello" );
});

test( "a basic test example", function() {
	expect( 3 );
	equal( sayHello(), "hello", "We expect value to be hello" );
});


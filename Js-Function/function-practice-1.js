practice

function foo() {
    function bar() {
        console.log("bar");
        return bar;
    }
    console.log("foo");
    return foo;
}
foo();
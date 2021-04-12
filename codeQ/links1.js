function f(n) {
    n = 3;
}
f(n);

console.log(n); // ???

// =====================================================

var obj = { a: 1 };

function f1(o) {
    o.a = 5;
}
f1(obj);

console.log(obj); // ???

// =====================================================

var obj = { a: 1 };

function f2(o) {
    o = { hello: 1 };
}

f2(obj);

console.log(obj); // ???

// В каком порядке выведутся цифры?

console.log(3);
setTimeout(function() {
    console.log(2);
}, 0);
console.log(1);

// ============================

Promise.resolve().then(() => console.log(1));
console.log(2);
setTimeout(() => console.log(3));

// ============================

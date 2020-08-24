Promise.resolve().then(() => console.log(1));
console.log(2);
setTimeout(() => console.log(3));

// В каком порядке выведутся цифры?










// Ответ: 2 1 3

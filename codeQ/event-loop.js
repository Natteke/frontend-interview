setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('promise resolved');
});

(async function() {
    console.log('function');
})();

console.log('completed');

requestAnimationFrame(() => {
    console.log('animation frame callback');
});







/*
function - несмотря на то, что async возвращает промис, синхронная часть выполняется моментально.
Только дальнейший ассинхронный код пойдет в таски/микротаски
completed - синхронный код
promise resolved - микротаска, приоритетнее тасок
timeout - таска
animation frame callback - RAF выполняется перед repaint. Соответственно после синхронного кода и микротасок
 */


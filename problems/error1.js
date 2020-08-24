/*
  Сейчас функция работает не как от нее ожидается. 
  Нужно, чтобы выводилось значение каждой итерации с промежутком в секунду 
  Ожидаемый вывод:
  []
  [1]
  [1, 1]
*/

for(var i = [];i.length < 3;i.push(1)){
    setTimeout(() => {
        console.log(i);
    }, i.length * 1000);
}







/*
    Ответ 1:
    решение через замыкание аргумента в функции

    for(var i = [];i.length < 3;i.push(1)){
        ((z) => {
            setTimeout(() => {
                console.log(z);
            }, z.length * 1000);
        })([...i])
    }

 */

/*
    Ответ 2:
    решение через let
    for(var i = [];i.length < 3;i.push(1)){
        let z = [...i];
        setTimeout(() => {
            console.log(z);
        }, z.length * 1000);
    }

 */



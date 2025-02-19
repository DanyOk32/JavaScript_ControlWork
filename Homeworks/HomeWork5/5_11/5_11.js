// - створити функцію sum(arr) яка приймає масив чисел
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
'use strict';
// debugger

let x=[123123123, 12, 919, 92131239, 9123123, -99999999, -29999, -124348415]

let sumCalc = (arr) => {
    let answer = 0;
    for(let i = 0; i < arr.length; i++){
        answer = answer + arr[i]
    }
    document.write(answer)
}
sumCalc(x)
// - створити функцію яка повертає найменьше число з масиву
'use strict';
// debugger

// підглядав з дз

let x = [0, 10, 100, -500, 900, 13123, -1, -112]

minNumberArray(x)
let wer = (array) => {
    let first = x[0];
    for (let i = 1; i < array.length; i++){
        if(x[i] < first){
            first = x[i]
        }
    }
    document.write(first)
}
wer(x)
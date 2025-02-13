// - створити функцію яка приймає масив та виводить кожен його елемент
'use strict';
// debugger
let x = ['der', 0, 123, "12 sder", 'ereer']

function eachEl(array){
    for (const el of array) {
        document.write(el +' ')
    }
}
eachEl(x)
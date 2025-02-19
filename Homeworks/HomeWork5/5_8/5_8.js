// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві)
// та будує для них список (ul li)
// та виводить його через document.write
'use strict';
// debugger

let x = [51213, 'kavabanga', 'dreams', '123sdad', 0, true, 18123, false, false]
let arrayWr = (array) => {
    document.write('<ul>')
    for (const el of array) {
        document.write(`<li>${el}</li>`)
    }
    document.write('</ul>')
}
arrayWr(x)
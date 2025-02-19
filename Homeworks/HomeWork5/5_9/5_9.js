// - створити функцію яка приймає масив об'єктів з наступними полями
// id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
'use strict';
// debugger

let x = [
    {
        id: 7123,
        name: 'Danylo',
        age: 123,
    },
    {
        id: 1111,
        name: 'Iryna',
        age:111,
    },
    {
        id: 10,
        name: 'Dmitriy',
        age: 32,
    },
    {
        id: 1,
        name: 'Oksana',
        age: 15,
    }
]

let elementInArr = (array) => {
    for (let obj of array) {
    document.write(`<p>${obj.id} - ${obj.name} - ${obj.age}</p>`)
}}
elementInArr(x)
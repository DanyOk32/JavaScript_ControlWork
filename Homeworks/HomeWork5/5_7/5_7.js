// - створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл) та виводить його через document.write
'use strict';
// debugger

let writorNul = (text, n_list) => {
    document.write(`<ul>`)
    for (let i=0; i<n_list;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
writorNul('jeraldos', 3)

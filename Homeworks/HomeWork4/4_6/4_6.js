// - створити функцію яка створює ul з трьома елементами li
// та виводить його через document.write. Текст li задати через аргумент всім однаковий
'use strict';
// debugger

function writerUl(text){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
writerUl('Hello okten List')
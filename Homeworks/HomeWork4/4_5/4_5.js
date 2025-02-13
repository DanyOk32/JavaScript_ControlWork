// - створити функцію яка створює параграф з текстом
// та виводить його через document.write. Текст задати через аргумент
'use strict';
// debugger

function writerP(text){
    document.write(`<p>${text}</p>`)
}
writerP('Hello Okten')
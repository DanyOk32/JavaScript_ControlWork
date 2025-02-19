// - створити функцію яка приймає масив та виводить кожен його елемент
'use strict';
// debugger
let x = ['der', 0, 123, "12 sder", 'ereer']



const printArrayElements = (arr) => {
    for( const el of arr){
        document.write(el + ' ')
    }
}


printArrayElements(x);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre,
// authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
'use strict';

let book1 = {
    title : 'How to win million dollars',
    pageCount : 10,
    genre: 'fantasy',
    authors :[
        {
            name : 'Taras',
            age : 43
        },
        {
            name : 'Olga',
            age : 81,
        }
    ]
}
let book2 = {
    title : 'Counter Strike',
    pageCount : 500,
    genre : 'shooter',
    authors :[
        {
            name : 'Dmitriy',
            age : 34,
        },
        {
            name : 'Ivan',
            age : 35,
        }
    ]
}
let book3 = {
    title : 'Macbook',
    pageCount : 99999,
    genre : 'shooter',
    authors :[
        {
            name : 'Petro',
            age : 81,
        },
        {
            name : 'Anna',
            age : 45,
        }
    ]
}

console.log(book1)
console.log(book2)
console.log(book3)

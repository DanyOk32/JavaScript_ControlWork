// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre,
// authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
'use strict';

let book1 = {
    title : 'How to win million dollars',
    pageCount : 10,
    genre: 'fantasy',
    authors : ['Taras', 23],
}
let book2 = {
    title : 'Counter Strike',
    pageCount : 500,
    genre : 'shooter',
    authors : ['Dmitriy', 42],
}
let book3 = {
    title : 'Macbook',
    pageCount : 99999,
    genre : 'shooter',
    authors : []
}
book3.authors[0] = 'Oksana';
book3.authors[1] = 61;


console.log(book1,book2,book3)

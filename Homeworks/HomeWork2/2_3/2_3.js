// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre,
// authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title : 'How to win million dollars',
    pageCount : 10,
    genre: 'fantasy',
}
let book2 = {
    title : 'Counter Strike',
    pageCount : 500,
    genre : 'shooter',
}
let book3 = {
    title : 'Macbook',
    pageCount : 99999,
    genre : 'shooter',
}
book1.authors = {
    name : 'Dimko',
    age : 100
}
book2.authors = {
    name : 'Slava',
    age : 10,
}
book3.authors = {
    name : 'Taras Shevchenko',
    age: 200,
}
console.log(book1.authors, book2, book3)
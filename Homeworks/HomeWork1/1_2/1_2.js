// - Створити 3 змінних
// firstName, middleName, lastName
// наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName; let middleName; let lastName ; let person
firstName = 'Danylo'
middleName = 'Bishop'
lastName = 'Verchenko'

person = firstName + ' ' + middleName + ' ' + lastName
console.log(person)

person = `${firstName} ${middleName} ${lastName}`
console.log(person)

firstName = 'Danylo '
middleName = 'Bishop '
lastName = 'Verchenko '
person = firstName + middleName + lastName
console.log(person)

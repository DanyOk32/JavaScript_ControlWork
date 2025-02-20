'use strict'
// debugger
// ---------------------------------#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let task = new User(1,'Danya','Verche','dan@gmail.com','+312312313');
console.log(task);
let secondTask = [
    new User(0,'Olya','Trqwe','sad@ma', '+!123123'),
    new User(1,'Olya','hgty','trop@ma', '+32111123'),
    new User(2,'Dima','qUir','uipp@ma', '+2111123'),
    new User(3,'Dimon','Andrewkin','ret@ma', '+3111123'),
    new User(4,'Dimonchik','pola','sggd@ma', '+5111123'),
    new User(5,'Andrew','qsa1qw','sadomazo@ma', '+123111123'),
    new User(6,'Andrewik','qwe1qw','sado@ma', '+!111123'),
    new User(7,'Anna','qwe1qw','sad@ma', '+3111123'),
    new User(8,'Kartoshka','tren','qwed@ma', '+889111123'),
    new User(9,'Vampir','zver','zxcd@ma', '+1111123'),
]
console.log(secondTask);

// ---------------------------------#2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати
// залишивши тільки об'єкти з парними id (filter)
let filtered = secondTask.filter((user) => user.id % 2 === 0)
console.log(filtered);

// ---------------------------------#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sorter = secondTask.sort(secondTask.id);
console.log(sorter);

// ------------------------#nkMXISv
// - створити конструктор для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id,name,surname,email,phone,order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order=order;
}
let clientsArr = [
    new Client(0, 'asd','sda','da@ma', '+3124124', ['Pencil', 'Phone', 'mango','cow']),
    new Client(1, 'asd','sda','da@ma', '+3124124', ['Tv', 'Phone']),
    new Client(2, 'asd','sda','da@ma', '+3124124', ['Marker', 'Phone', 'apple']),
    new Client(3, 'asd','sda','da@ma', '+3124124', ['Tv']),
    new Client(4, 'asd','sda','da@ma', '+3124124', ['COmp', 'Phone']),
    new Client(5, 'asd','sda','da@ma', '+3124124', ['Tv', 'Phone', 'kokos']),
    new Client(6, 'asd','sda','da@ma', '+3124124', ['Tree', 'Phone']),
    new Client(7, 'asd','sda','da@ma', '+3124124', ['seed', 'Phone','fish','meat']),
    new Client(8, 'asd','sda','da@ma', '+3124124', ['Tv', 'Phone']),
    new Client(9, 'asd','sda','da@ma', '+3124124', ['sigarets'])
]
console.log(clientsArr);

// --------------------#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання)
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorterNew = clientsArr.sort((first,second)=>first.order.length - second.order.length)
console.log(sorterNew);

// ---------------------------#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// --з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarCreator(model,manufacturer,year,maxSpeed,engineV){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engineV=engineV;
    this.drive = function() {console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)};
    this.info = function () {
        for (let elem in this) {
            console.log(elem,this[elem])
        }

    }
    this.increaseMaxSpeed = function (NewSpeen){
        this.maxSpeed = NewSpeen + maxSpeed
    }
    this.changeYear = function (NewValue){
        this.year = NewValue;
    }
    this.addDriver = function(driver){
        this.driver = driver
    }
    }
let car = new CarCreator('s40','bmw',2012,340,'3l')
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
console.log(car.maxSpeed);
car.changeYear(2025);
console.log(car.year);
car.addDriver({driver1: 'dimon', driver2: 'sashok'});
console.log(car.driver);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class  newCar{
    constructor(model,manufacturer,year,maxSpeed,engineV) {
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engineV=engineV;
    }
    drive() {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    info() {
        for (let elem in this) {
            console.log(elem,this[elem])
        }

    }
    increaseMaxSpeed(NewSpeen){
        this.maxSpeed = NewSpeen + this.maxSpeed
    }
    changeYear(NewValue){
        this.year = NewValue;
    }
    addDriver(driver){
        this.driver = driver
    }
}
let car2 = new newCar('s40','bmw',2012,340,'3l')
console.log(car2);
car2.drive()
car2.info()
car2.increaseMaxSpeed(20);
console.log(car2.maxSpeed);
car2.changeYear(2020);
console.log(car2.year);
car2.addDriver({driver1: 'anna'})
console.log(car2.driver);

// ---------------------------#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class princess{
    constructor(name,age,fsize) {
        this.name=name;
        this.age=age;
        this.fsize=fsize;
    }}
class prince{
    constructor(name,age,finder) {
        this.name=name;
        this.age=age;
        this.finder=finder;
    }}
let arr=[
    new princess('anna', 123, 30),
    new princess('kate', 133, 32),
    new princess('tanya', 335, 34),
    new princess('diana', 18, 36),
    new princess('karina', 35, 38),
    new princess('alya', 5, 37),
    new princess('vika', 1345, 29),
    new princess('olya', 25, 15),
    new princess('sveta', 13, 313),
    new princess('mityay', 15, 33)
]
let princeMain = new prince('den', 21, 313)
for (const now of arr) {
    if (now.fsize === princeMain.finder){
        console.log(`${now.name} повинна бути з принцем`)
    }
}
// -----------------------#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.newForEach = function (back){
    for (const element of this) {
        back(element)
    }
}
let x = ['hello', 123, 'm123']
x.newForEach((b) => console.log(b))
Array.prototype.newFilter = function (back2){
    let result=[]
    for (const element2 of this) {
        if(back2(element2)){
            result.push(element2)
        }
    }
    return result;
}
let random = [
    {name: 'kolya', age: 24, status: "false"},
    {name: 'anna', age: 74, status: "false"},
    {name: 'Dima', age: 34, status: "true"},
    {name: 'Svatlana', age: 5, status: "false"},
    {name: 'Tanya', age: 17, status: "true"}
]
console.log(random.newFilter((user) => user.age > 20));
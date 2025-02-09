//- описати масив, в якому буде зберігатись інформація про
//температуру вранці, вдень і ввечері за термін в 7 днів.
//Як зробити цей масив - вам потрібно подумати.
//Нормальних варіантів опису - 2.
//Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
'use strict';

// ------------------------------Varian#1
let week;
week = {
    day1 : ['+5C','+10C', '0C'],
    day2 : ['+3C','+4C','+2C'],
    day3 : ['0C','+1C','-2C'],
    day4 : ['0C','+1C','0C'],
    day5 : ['+1C','+2C','0C'],
    day6 : ['+3C','+5C','+1C'],
    day7 : ['0C','+2C','-1C'],
}
console.log(week)
console.log(week.day1)
// ------------------------------Varian#2
let week2;
week2 = [
    {
        morning : '+5C',
        afternoon : '+6C',
        evening : '0C',
    },
    {
        morning : '+3C',
        afternoon : '+2C',
        evening : '+1C',
    },
    {
        morning : '-5C',
        afternoon : '+1C',
        evening : '-10C',
    },
    {
        morning : '+5C',
        afternoon : '+6C',
        evening : '0C',
    },
    {
        morning : '+2C',
        afternoon : '+16C',
        evening : '-10C',
    },
    {
        morning : '++10C',
        afternoon : '+13C',
        evening : '+3C',
    },
    {
        morning : '+1C',
        afternoon : '0C',
        evening : '-3C',
    },
    ]
console.log(week2)
console.log(week2[week2.length - 1])
console.log(week2[1].morning)
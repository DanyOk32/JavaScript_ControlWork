//Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
'use strict';
// debugger
let number1 = prompt("Введіть перше число(цифрою)");
let number2 = prompt('Введіть друге число(цифрою)');
if(isNaN(number1)){
    console.log('Будь-ласка введіть саме цифру. Спробуйте ще раз')
}else if(isNaN(number2)){
    console.log('Будь-ласка введіть саме цифру. Спробуйте ще раз')
}else{
    if(number1 > number2){
        console.log(`Найбільше число ${number1}`)
    }else if(number1 === number2){
        console.log(`Два числа рівні ${number1} ${number2}`)
    }else{
        console.log(`Найбільше число ${number2}`)
    }
}
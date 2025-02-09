//Скласти розклад на тиждень за домопоги switch.
//Користувач вводить порядковий номер дня тижня
//і на екрані відображається інфа що заплановано на цей день
//(можна замість плану на день, назву дня англійською).
'use strict';
// debugger
let x = +prompt('Введіть день тижня(від 1 до 7 - цифрою)')
switch (x){
    case 1:
        console.log('Plan on Monday')
        break;
    case 2:
        console.log('Plan on Tuesday')
        break;
    case 3:
        console.log('Plan on Wednesday')
        break;
    case 4:
        console.log('Plan on Thursday')
        break;
    case 5:
        console.log('Plan on Friday')
        break;
    case 6:
        console.log('Plan on Saturday')
        break;
    case 7:
        console.log('Plan on Sunday')
        break;
    default :
        console.log('Невірна інформація, спробуйте ще раз')
}
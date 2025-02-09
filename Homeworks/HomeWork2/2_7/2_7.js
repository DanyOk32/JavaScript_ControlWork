//Дано змінну time яка рівна числу від 0 до 59.
//Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
'use strict';
// debugger
let time;
time = 1;
if(time >= 0 && time < 15){
    console.log('Перша четверть')
}else if(time >= 15 && time < 30){
    console.log('Друга четверть')
}else if(time >=30 && time < 45){
    console.log('Третя четверть')
}else if(time >=45 && time <= 59){
    console.log('Четверта четверть')
}else{
    console.log('Щось не так!')
}
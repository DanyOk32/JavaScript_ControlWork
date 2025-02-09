//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
'use strict';
// debugger

let x = 1;
while (x<=20){
    document.write('<div><h1>Lorem ipsum dolor.</h1>' + x + '</div>')
    x++;
}
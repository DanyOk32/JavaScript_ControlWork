// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
'use strict';
// debugger

function squareCylinder(r,h){
    return 2 * Math.PI * r * h;
}
document.write(squareCylinder(2,2))
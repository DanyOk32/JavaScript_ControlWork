// є змінна х, яка може прийняти будь-яке значення
// (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

'use strict';
// debugger
// false
// 0
// -0
// ''
// ""
// ``
// null
// undefined
// NaN

let x = prompt("Введіть будь-що")
if (x===`` || x=== null || x=== undefined || x === NaN || x ===0){
    x='default'
    console.log(x)
} else{
    x='Not default'
    console.log(x)
}
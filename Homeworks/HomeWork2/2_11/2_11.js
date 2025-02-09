//є змінна х, яка може прийняти будь-яке значення
//(стрінг, число, undefined, null  і тд включно). Напишіть код який,
//буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

'use strict';
// debugger
let x = prompt("Будь-яке значення")
if(x === 0 || x === -0 || x === 'false' || x === 0n || x=== null || x === undefined){
    x = 'default';
    console.log(x)
}else{
    x='complete';
    console.log(x)
}

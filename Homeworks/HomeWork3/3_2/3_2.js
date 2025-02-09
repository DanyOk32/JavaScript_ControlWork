//За допомогою циклу for і document.write()
//вивести 10 блоків div c довільним текстом і індексом всередині

'use strict';
// debugger;
for(let i = 1; i <= 10; i++){
    document.write(
        `<div>Lorem ipsum dolor sit. -- ${i} - index</div>`
    )
}
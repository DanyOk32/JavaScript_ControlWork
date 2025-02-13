// - створити функцію swap(arr,index1,index2)
// Функція міняє місцями заняення у відповідних індексах
'use strict';
// debugger

// при перевірці дз, визначив, що не прописав перший іф - на випадок якщо індекс більший за довжину масива

let x=[0, 1 , 5, 10, 15]

function swap(arr, index1, index2){
    if (index1 < arr.length && index2 < arr.length){
    let boo = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = boo
    document.write(arr)
    }else{
        document.write('<p>Завеликий індекс</p>')
    }

}
swap(x, 1, 0)
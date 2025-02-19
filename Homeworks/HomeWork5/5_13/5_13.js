// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад
// exchange(10000,[{currency:'USD',value:25}
// {currency:'EUR',value:42}],'USD')
// => 400

let x = [
    {
        currency: 'USD',
        value: 41.79,
    },
    {
        currency: 'EUR',
        value: 43.40,
    },
    {
        currency: 'JPY',
        value: 0.27,
    }
]

let exchanger = (sumUAH, array, exchangeCurrency) =>{
    for(let i = 0; i < array.length; i++){
        if(array[i].currency === exchangeCurrency){
            return sumUAH / array[i].value;
        }
    }
}
document.write(exchanger(10000, x, 'JPY'))
'use strict'
let x = [1 , 3 ,5 ,7, 8, 19]
let dmir = {
    name: 'danya',
    age: 12,
    status: false,
    tableN: 3
}
let {name:aka3, age} = dmir
console.log(name, age)

var selectedIndex = null; // сюда сохраняем номер выбранного элемента

function renderOutput() {
    var output = document.getElementById('output');
    output.innerHTML = ''; // очищаем вывод

    for (var i = 0; i < entries.length; i++) {
        var item = entries[i];
        var p = document.createElement('p');
        p.textContent = item.key + ' = ' + item.val;

        // Если этот элемент выбран — подсветим
        if (i === selectedIndex) {
            p.style.backgroundColor = '#d0eaff';
        }

        // При клике — сохраняем индекс выбранного
        p.onclick = function(index) {
            return function() {
                selectedIndex = index;
                renderOutput(); // перерисуем с выделением
            };
        }(i);

        output.appendChild(p);
    }
}

// Функция, вызываемая по нажатию кнопки "Удалить"
function deleteSelected() {
    if (selectedIndex !== null) {
        entries.splice(selectedIndex, 1); // удаляем из массива
        selectedIndex = null; // сбрасываем выбор
        renderOutput(); // обновляем вывод
    } else {
        alert("Сначала выберите элемент.");
    }
}

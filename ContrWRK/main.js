'use strict'
let resultArray = []
let selectp = null

function checkAdd(){
    let textInput = document.getElementById('textinput')
    let textInputTrim = textInput.value.trim()
    textInputTrim = textInputTrim.replace(/\s/g, '')
    if ((textInputTrim.match(/=/g) || []).length !==1){
        alert('В тексті повинен бути один знак дорівнює (=)');
        return
    }
    let [name, value] = textInputTrim.split('=');
    const validvalue = /^[a-zA-Zа-яА-Я0-9]+$/;
    if(!name || !value || !validvalue.test(name) || !validvalue.test(value)){
        alert('Синтаксис тексту повинен містити лише букви та цифри. Без спец-символів')
        return
    }
    resultArray.push({ name, value })
    addingText();
    // input.value=''
}
function addingText(){
    let result = document.getElementById('workList')
    result.innerText = '';
    resultArray.forEach((text, index) => {
        let createP = document.createElement('p');
        createP.innerText = `${text.name}=${text.value}`;
        if (index === selectp) {
            createP.style.backgroundColor = '#d0eaff';
        }
        createP.onclick = () => {
            selectp = index;
            addingText();
        };
        result.appendChild(createP);
    })
}
function sortbyName(){
    resultArray.sort(function (a,b){
        if(a.name > b.name){
            return 1;
        } else {
            return -1;
        }
    })
    addingText()
}
function sortbyValue(){
    resultArray.sort(function (a,b){
        if(a.value>b.value){
            return 1;
        } else {
            return -1;
        }
    })
    addingText()
}
function lastDelete(){
    if(selectp !== null){
        resultArray.splice(selectp, 1);
        selectp = null;
        addingText()
    } else {
        alert('Спочатку оберіть пару зі списку')
    }
}

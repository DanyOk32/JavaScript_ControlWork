'use strict'
// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.
const x = document.createElement('div')
x.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.append(x)
const y = x.cloneNode(true)
document.body.append(y)

// #OPLI89c9G
// – Є масив:
//     [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const array = ['Main','Products','About us','Contacts'];
const first = document.createElement('ul')
for (const elem of array) {
    const list = document.createElement('li')
    list.innerText = elem;
    first.appendChild(list)
}
document.body.append(first)
first.classList.add('menu')

// #jeBqHV525U5
// – Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let array2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const elementCourse of array2) {
    const divCourse = document.createElement('div')
    divCourse.innerText = `${elementCourse.title}   monthDuration: ${elementCourse.monthDuration}`
    document.body.appendChild(divCourse)
}

// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’>
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//     Завдання робити через цикли.
for (const elementNewCourse of array2) {
    const divNew = document.createElement('div')
    divNew.classList.add('item')
    const headerindiv = document.createElement('h1')
    headerindiv.classList.add('heading')
    headerindiv.innerText = elementNewCourse.title
    const paragindiv = document.createElement('p')
    paragindiv.classList.add('description')
    paragindiv.innerText = elementNewCourse.monthDuration
    divNew.append(headerindiv, paragindiv);
    document.body.appendChild(divNew)

}

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const coursesArrayElement of coursesArray) {
    const maindiv = document.createElement('div')
    maindiv.classList.add('maindiv')
    const title = document.createElement('h2')
    title.innerText = coursesArrayElement.title
    title.classList.add('headerhw')
    const dur = document.createElement('div')
    dur.classList.add('dur', 'both')
    dur.innerText = coursesArrayElement.monthDuration
    const hour = document.createElement('div')
    hour.classList.add('hour', 'both')
    hour.innerText = coursesArrayElement.hourDuration
    maindiv.append(title, dur, hour)
    for(const moduleC of coursesArrayElement.modules){
        const modulecs = document.createElement('p')
        modulecs.innerText = moduleC
        modulecs.classList.add('modulec')
        maindiv.appendChild(modulecs)
    }




    document.body.appendChild(maindiv)

}
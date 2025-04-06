'use strict'
// debugger
// – Знайти та вивести довижину настипних стрінгових значень
let s1 ='javascript is cool'
let s2 = 'hello world';
let s3 = 'lorem ipsum';
let strings = [s1, s2, s3]
for (let x of strings) {
    console.log(x.length);
}
// – Перевести до великого регістру наступні стрінгові значення
for (const y of strings) {
    console.log(y.toUpperCase());
// – Перевести до нижнього регістру настипні стрінгові значення
    console.log(y.toLowerCase());
}
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let nstr = str.trim()
console.log(nstr);
console.log(nstr.length);
console.log(str.length);
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні'
function stringToarray(str){
    if(str){
        let split = str.split(' ');
        return split;
    }
    return['']
}

console.log(stringToarray(str2));
console.log(stringToarray('hello world'));
console.log(stringToarray(null));
console.log(stringToarray(undefined));
// let arr2 = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові..
let numbers = [10,8,-7,55,987,-1011,0,1050,0]
let numbersNew = numbers.map(value=> value +'')
console.log(numbersNew);

// #5hqyKTfmc
// – створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого, або навпаки в залежності від значення аргументу direction.
// debugger
let mainNums = [11,21,3];
function sortNums(nums,direction){
    if(direction === 'ascending')return nums.sort((a,b)=> a-b)
    if(direction === 'descending')return nums.sort((a,b)=>b-a)
}
console.log(sortNums(mainNums, 'ascending'));
console.log(sortNums(mainNums, 'descending'));
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let less6 = coursesAndDurationArray.sort((b,a) => a.monthDuration - b.monthDuration)
console.log(less6);
let less6_1 = less6.filter((value) => value.monthDuration > 5)
console.log(less6_1);
let x6 = less6_1.map((value, index) => {
    value.id = index + 1;
    return value
});
console.log(x6);

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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter((value => {
    return value.modules.includes('sass')
})));
console.log(coursesArray.filter((value => {
    return value.modules.includes('docker')
})));
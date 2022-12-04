// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

//-----------------------------------------------------------------------------------------------

let string = "nissan gt r-32";
function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1)
    console.log(newStr);
}
ucFirst(string);

//-----------------------------------------------------------------------------------------------

// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

//-----------------------------------------------------------------------------------------------

let strIng = "XXX new carcenter XXX";
function checkSpam(str) {
    let newSTr = str.toLowerCase();
    let result = (newSTr.includes("badWord".toLowerCase()) || newSTr.includes("XXX".toLowerCase())) ? true : false;
    return result;
}
console.log(checkSpam(strIng));


//-----------------------------------------------------------------------------------------------

// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.

//-----------------------------------------------------------------------------------------------

let string = "привет Женя";
function checkSpam(str) {
    str = str.split("").reverse().join("");
    return str;
}
console.log(checkSpam(string));

//-----------------------------------------------------------------------------------------------

// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль

// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

//-----------------------------------------------------------------------------------------------

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
for (i = 0; i < stations.length; i++) {
    let slicedPart = stations[i].slice(0, 3);
    let slicedName = stations[i].slice((stations[i].indexOf(";") + 1));
    console.log(slicedPart + ': ' + slicedName);
}

//-----------------------------------------------------------------------------------------------

// Задание 5
// Напишите функцию, которая проверяет, cодержит ли массив элементы, равные нулю. Если да - возвращает true.
// Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]

//-----------------------------------------------------------------------------------------------

let mass = [12, 4, 50, 1, 0, 18, 40];
let arr = [56, 24, -55, 2, 9, -345];

function findZero(arr){
     if(arr.find(item => item == 0)){
        return true;
     } 
     else{
        return false;
     }
    

}

console.log(findZero(mass));

//-----------------------------------------------------------------------------------------------

// Задание 6
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

//-----------------------------------------------------------------------------------------------

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr) {
    let newStr = [];
    for (i = 0; i < arr.length; i++) {
        if (!(newStr.includes(arr[i]))) {
            newStr.push(arr[i]);
        }
    }
    return newStr;
}
console.log(unique(strings))


//-----------------------------------------------------------------------------------------------

// Задание 7
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки).
// На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.

// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.

// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:

// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// В задании необходимо использовать методы массивов: forEach, splice, concat

//-----------------------------------------------------------------------------------------------

catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
catsJanes = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
catsJulias = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
function verifyCats(catsJane, catsJulia) {
    let newcatsJane =  catsJane.splice(1, catsJane.length - 2);
    let common = newcatsJane.concat(catsJulia);
    common.forEach(function(item, i, common) {
        if(item > 6){
            console.log("Кошка №" + i + " взрослая, ей " + item + " лет.");
        }
        else{
            console.log("Кошка №" + i + " ещё котёнок, ему " + item + " лет.");
        }
    });
}
console.log(verifyCats(catsJane, catsJulia));
console.log(verifyCats(catsJanes, catsJulias));

//-----------------------------------------------------------------------------------------------

// Задание 8
// Решить 4 задание из прошлой темы, используя метод filter

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

//-----------------------------------------------------------------------------------------------

let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let newArr = arr.filter(function (item) {
        return item > a;
    })
    return newArr;
}
console.log(filterFor(arr, 3))

//-----------------------------------------------------------------------------------------------

// Задание 9
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов.
// Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].


//-----------------------------------------------------------------------------------------------

let strings = ['yes', 'hello', 'no', 'easycode', 'what'];
function sortWord(arr){
    let mewStrings = arr.filter(item => item.length > 3);
    return mewStrings;
}

console.log(sortWord(strings));


//-----------------------------------------------------------------------------------------------

// Задание 10
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
// [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива.
// В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.

//-----------------------------------------------------------------------------------------------

let arr = [ [14, 45], [1], ['a', 'c', 'd'] ];
let mas = [ [1], [14, 45], ['a', 'c', 'd'] ];

function sortMin(arr){
    let mass = arr.sort((a, b) => a.length - b.length);
    return mass;
}

console.log(sortMin(arr));
console.log(sortMin(mas));

//-----------------------------------------------------------------------------------------------

// Задание 11
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.
// Вызовите функцию для обоих наборов тестовых данных.

// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

// В задании необходимо использовать методы массивов: map, filter, reduce

//-----------------------------------------------------------------------------------------------

let catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
let catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
function getAverageHumanAge(arr) {
    let humanAge = arr.map(function (item) {
        if(item <= 2){
            item *= 10;
        } else{
            item *= 7;
        }  
        return item; 
    });

    let adultAge = humanAge.filter((item) => item > 18);

    const sum = adultAge.reduce((acc, item) => acc += item, 0);

    return avg = sum / adultAge.length;
}

console.log(getAverageHumanAge(catAges));
console.log(getAverageHumanAge(catAges2));

//-----------------------------------------------------------------------------------------------
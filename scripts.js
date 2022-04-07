// Задание 2
// Создайте объект с именами и заработными платами
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.
const engineers = { Den: 1000, Matt: 5000, Steve: 2000 };

for (let property in engineers){
    console.log(`Заработная плата ${property} : ${engineers[property]}`);
}

// Задание 3
// Создать массив из 5 элементов.

// Используя цикл for, вывести каждый второй элемент массива в консоль.
let arrey = [21 , 32 , 55 , 90 , 134];
for (let i = 0 ; i < arrey.length ; i = i + 2 ) {
    console.log(arrey[i]);
}
// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]



// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (let i = 0; i < numbers.length; i++){
    console.log(`Индексу: ${i} , соответствует число ${numbers[i]}`)
}
// Задание 5
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
//1)Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
for (let item of numbers){
    console.log(item);
}
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//2)Посчитать и вывести в консоль сумму элементов в массиве.
 let sum = 0
for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]; 
}
console.log(sum);

// 3)Посчитать и вывести в консоль сумму четных элементов в массиве.
for (i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
        sum = sum + numbers[i];
    }
}
console.log(sum);


//4)Найти и вывести в консоль максимальное число массива.
let max = numbers[0]
for (i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}
console.log(max)
// 5)Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
console.log(max);
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == max){
        console.log(i)
    }
}
// Задание 6
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]



// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.
let newArr = []
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i])
    }
}
console.log(newArr)
// Задание 7
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;

// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let nums = [5, 4, 3, 8, 0];
let limit = 5;
let arrey = []
for (i = 0; i < nums.length; i++) {
    if (nums[i] >= limit) {
        arrey.push(nums[i])

    }
}
console.log(arrey)

// Задание 8
// Описать массив из объектов с двумя полями: строковым и числовым.
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}]

// Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.
const users = [{name: 'Vasya' , age: 23}, {name: 'Olya' , age: 12}];
for (i = 0; i < users.length; i++){ 
    if(users[i].age > 10){
        console.log(users[i].name);
    }
}
// Задание 9
// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):

// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

// Вывести этот массив в консоль.

// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let catalog = [];
for (let i = 0; i < vegetables.length; i++) {
    catalog.push({word: vegetables[i] , length: vegetables[i].length});
}
console.log(catalog);

for (let item of catalog){
    console.log(`слово ${item.word} - ${item.length}`)
}

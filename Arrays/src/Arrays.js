"use strict";

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Отсортируйте массив по убыванию
console.log(list.sort(function (e1, e2) {
    return e2 - e1;
}));

//Подмассив первых 5 элементов, последних 5 элементов
console.log(list.slice(0, 5));
console.log(list.slice(list.length - 5));

//Найдите сумму четных чисел в массиве
var sum = list.reduce(function (sum, element) {
    if (element % 2 === 0) {
        return sum + element;
    } else {
        return sum;
    }
});

console.log(sum);

//Создайте массив от 1 до 100 и получите список квадратов четных чисел
var bigList = [];

fillList(100, bigList);

function fillList(length, list) {
    for (var i = 1; i <= length; i++) {
        list.push(i);
    }
}

var powList = bigList.filter(function (item) {
    return item % 2 === 0;
});
powList.forEach(function (el, index, array) {
    array[index] = Math.pow(el, 2);
});

console.log(powList);
"use strict";

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Сортировка по убыванию: " + list.sort(function (e1, e2) {
    return e2 - e1;
}));

console.log("Первые пять: " + list.slice(0, 5));
console.log("Последние пять: " + list.slice(list.length - 5));

var sum = list.reduce(function (sum, element) {
    if (element % 2 === 0) {
        return sum + element;
    } else {
        return sum;
    }
});
console.log("Сумма четных: " + sum);


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
powList.map(function (value) {
    return Math.pow(value, 2);
});
console.log("Квадраты четных: " + powList);
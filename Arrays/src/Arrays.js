var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Отсортируйте массив по убыванию
list.sort(sortDesc);

function sortDesc(e1, e2) {
    return e2 - e1;
}

//Подмассив первых 5 элементов, последних 5 элементов
var firstFiveElements = list.slice(0, 4);
var lastFiveElements = list.slice(list.length - 5); //или здесь -4?

//Найдите сумму четных чисел в массиве
var sum = 0;
list.forEach(calculateSum);
function calculateSum(i) {
    if (i % 2 === 0) {
        sum += i;
    }
}

//Создайте массив от 1 до 100 и получите список квадратов четных чисел
var bigList = [];
for (var i = 1; i <= 100; i++) {
    bigList.push(i);
}
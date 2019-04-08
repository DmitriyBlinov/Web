"use strict";

var countries = [
    {
        name: "USA",
        cities: [{name: "New York", population: 8537673},
            {name: "Los Angeles", population: 3884307},
            {name: "Chicago", population: 2718782}]
    },
    {
        name: "France",
        cities: [{name: "Paris", population: 2229621},
            {name: "Marseille", population: 855393},
            {name: "Lyon", population: 500715}]
    },
    {
        name: "Russia",
        cities: [{name: "Moscow", population: 12616000},
            {name: "Saint Petersburg", population: 5384000},
            {name: "Novosibirsk", population: 1613000},
            {name: "Yekaterinburg", population: 1484000}]
    }
];

var countriesPopulation = {};
for (var i = 0; i < countries.length; i++) {
    countriesPopulation[countries[i].name] = calculateSum(countries[i].cities, "population");
}

function calculateSum (array, key) {
    var sum = 0;
    for (var j = 0; j < array.length; j++) {
        sum += array[j][key];
    }
    return sum;
}

console.log(countriesPopulation);

var maxCities = findMaxSubArray(countries, "cities");
function findMaxSubArray (array, subArray) {
    var temp = {};
    var maxLength = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i][subArray].length > maxLength) {
            maxLength = array[i][subArray].length;
        }
    }
    for(var i = 0; i < array.length; i++) {
        if (array[i][subArray].length === maxLength) {
            temp[array[i].name] = maxLength;
        }
    }
    return temp;
}
console.log(maxCities);
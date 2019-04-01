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

var temp = {};
for (var i = 0; i < countries.length; i++) {
    temp[countries[i].name] = calculateSum(countries[i]);
}

function calculateSum (array) {
    var sum = 0;
    for (var j = 0; j < array.cities.length; j++) {
        sum += array.cities[j].population;
    }
    return sum;
}

console.log(temp);
/*
for(var i = 0; i < countries.length; i++) {
    if (countries[i].cities.length > maxLength) {
        maxLength = countries[i].cities.length;
    }
}*/
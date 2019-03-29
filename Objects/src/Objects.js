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

var maxLength = 0;

function isMax(element) {

}

var maxCitiesCountry = countries.map(function findMax(element, index, array) {
    element["cities"].length;
});

var maximum = countries.find(getMaxValue(countries));

function getMaxValue(countries) {
    var max = countries[0].name;
    for (var i = 1; i < countries.length; i++) {
        if (max.cities.length < countries[i].cities.length) {
            max = countries[i].name;
        }
    }
    return max;
}

/*
for(var i = 0; i < countries.length; i++) {
    if (countries[i].cities.length > maxLength) {
        maxLength = countries[i].cities.length;
    }
}*/
console.log(maximum);
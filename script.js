"use strict";

function searchArrayWord(mass,word){
     for( let a = 0; a < mass.length; a++){
         if (mass[a] === word)
        return true;
    }
        return false;
    }

    let animals = ['Кот', 'Собака', 'Жираф' ];

 console.log(searchArrayWord(animals,'Жираф'));

let num = 0;

function f(mass){
    for( let a = 0; a < mass.length; a++){
        num = num + mass[a];
    }
    return num / mass.length;
}

console.log(f([1, 2, 3, 7, 6, 9]));

let i = {html:'HTML', css: 'CSS', js: 'ECMA'};

let mass = [];

function getKeys(keys){
    for(let key in keys){ 
    mass.push(keys[key]);
    }
    return mass;
}

console.log(getKeys(i));

let o = {
    'name' : 'Алексей',
    'phone' : 09900000000,
    'address' : 'Ул. Зыгина',
    'totalprice' : 830,
    'totalweight' : 2700,
    'purchased goods': {
        'Чашка': {
            'price': 100,
            'weight': 200
        },
        'Ложка': {
            'price':30,
            'weight': 100
        },
        'Чайник': {
            'price':550,
            'weight': 2000
        },
        'Кружка': {
            'price':550,
            'weight': 400
        }
    }
};


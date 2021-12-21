'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('can drive');

// const private = 434;
// const interface = 'audio';

function fruit(a, b){
    console.log(a, b);
    const data = `I bought ${a} apples and ${b} oranges`;
    return data;
}

console.log(fruit(5, 0));
console.log(fruit(4, 6));


const juice = function (a, b){
    console.log(a, b);
    const data = `I bought ${a} apples and ${b} oranges`;
    return data;
}

console.log(juice(45, 87));


const calcAge = birthYear => 2021 - birthYear;
const age = calcAge(1992);
console.log(age);


const yearUntillRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `Mr. ${firstName} retires in ${retirement} years`;
}

console.log(yearUntillRetirement(1992, 'Arka'));
console.log(yearUntillRetirement(1980, 'Arkajit'));

const cutPieces = function (fruit){
    const slices = fruit*4;
    return slices;
}

const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(4, 5));


const friends = ['Michael', 'John', 'Kara'];
console.log(friends);

const numberValue = new Array(100, 200, 300, 400);
console.log(numberValue);

console.log(friends[1]);
console.log(friends.length);
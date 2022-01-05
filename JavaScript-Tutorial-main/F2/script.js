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


friends.push('Harry');
console.log(friends);

friends.unshift('Peter');
console.log(friends);

friends.pop()
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('John'));

console.log(friends.includes('John'));

const jonas = {
    firstName: 'Jonas',
    lastName: 'Boult',
    age: 2021 - 1992,
    job: 'Developer',
    friends: ['Arka', 'AJ', 'Smith']
}

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last'+nameKey]);

// const interested = prompt('what do you want to know?');

// console.log(jonas[interested]);

jonas['twitter'] = '@hjbsbs';
jonas.location = 'klinm';

console.log(jonas);


const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Boult',
    birthYear: 1992,
    job: 'Developer',
    friends: ['Arka', 'AJ', 'Smith'],
    // ageCalc: function(birthYear){
    //     return 2021 - birthYear;
    // }
    ageCalc: function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    }
}

// console.log(jonas1.ageCalc(1992));
// console.log(jonas1['ageCalc'](1992));

console.log(jonas1.ageCalc());
console.log(jonas1.age);

for (let rep=1; rep<=10; rep++){
    console.log(`I lhave done ${rep} reps`);
}

function ageCalc(year){
    return 2021 - year;
}

console.log(ageCalc(1993));

const john = [
    'personal',
    2021-1992,
    true,
    'constant',
    1234,
    ['Mike', 'Tyson', 'Gray'],
    'osborn'
]

const stringList = [];

for (let i=0; i<john.length; i++){
    if (typeof john[i] !== 'string') continue;
    // stringList[i] = john[i];
    stringList.push(typeof john[i]);
    console.log(john[i]);
}

console.log(stringList);

// console.log(Math.random());

let dice = Math.trunc(Math.random()*6)+1;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if (dice === 6) console.log('The loop is about to end');
}

console.log()


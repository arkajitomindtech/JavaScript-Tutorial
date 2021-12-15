//LECTURE: Values and Variables

let country = "India";
let continent = 'Asia';
let population = 13000000;

console.log(country);
console.log(continent);
console.log(population);


//LECTURE: Data Types
let isIsland = 'India';
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//LECTURE: let, const and var
language = 'Jamaican';

// const country = 'India';
// const continent = 'Asia';

continent = 'Africa';

//LECTURE: Basic Operators

splitPopulationHalf = population / 2;
console.log(splitPopulationHalf);

population+=1;

console.log(population);

let finland = 6000000;
console.log(finland < population);

let avgPopulationAllCountry = 33000000;
console.log(avgPopulationAllCountry > population);

description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
console.log(description);

//LECTURE: Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//LECTURE: Taking Decisions: if / else Statements

if (population>33000000) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33000000-population} below average`);
}

//LECTURE: Type Conversion and Coercion

console.log('9' - '5' == 4);
console.log('19' - '13' + '17' == '617');
console.log('19' - '13' + 17 == 23);
console.log('123' < 57 == false);
console.log(5 + 6 + '4' + 9 - 4 - 2 == 1143);







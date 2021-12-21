//coding challenge #1


//task 1
// Variable declerations

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark/heightMark**2;
const BMIJohn = massJohn/(heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

//Coding Challenge #2   

if (markHigherBMI) { 
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//Coding Challenge #3

// const dolphinTeamA = 96;
// const dolphinTeamB = 108;
// const dolphinTeamC = 89;

// const koalasTeamA = 88;
// const koalasTeamB = 91;
// const koalasTeamC = 110;

// const dolphinTeamA = 97;
// const dolphinTeamB = 112;
// const dolphinTeamC = 101;

// const koalasTeamA = 109;
// const koalasTeamB = 95;
// const koalasTeamC = 123;

const dolphinTeamA = 97;
const dolphinTeamB = 112;
const dolphinTeamC = 101;

const koalasTeamA = 109;
const koalasTeamB = 95;
const koalasTeamC = 106;


const averageScoreDolphine = (dolphinTeamA + dolphinTeamB + dolphinTeamC) / 3;
const averageScoreKoalas = (koalasTeamA + koalasTeamB + koalasTeamC) / 3;

console.log(averageScoreDolphine);
console.log(averageScoreKoalas);

if (averageScoreDolphine>averageScoreKoalas){
    console.log(`The winning team is Dolphins with average score ${averageScoreDolphine}`);
} else if(averageScoreKoalas>averageScoreDolphine){
    console.log(`The winning team is Koalas with average score ${averageScoreKoalas}`);
} else if(averageScoreDolphine === averageScoreKoalas){
    console.log("Both team wins");
}

if (averageScoreDolphine>averageScoreKoalas && averageScoreDolphine >=100){
    console.log(`The winning team is Dolphins with average score ${averageScoreDolphine}`);
} else if (averageScoreDolphine<averageScoreKoalas && averageScoreKoalas >=100){
    console.log(`The winning team is Koalas with average score ${averageScoreKoalas}`);
} else if(averageScoreDolphine === averageScoreKoalas){
    console.log("Both team wins");
}

if (averageScoreDolphine>averageScoreKoalas && averageScoreDolphine >=100){
    console.log(`The winning team is Dolphins with average score ${averageScoreDolphine}`);
} else if (averageScoreDolphine<averageScoreKoalas && averageScoreKoalas >=100){
    console.log(`The winning team is Koalas with average score ${averageScoreKoalas}`);
} else if(averageScoreDolphine === averageScoreKoalas && averageScoreKoalas>=100 && averageScoreDolphine>=100){
    console.log("Both team wins");
} else {
    console.log('No team wins')
}

//Coding Challenge #4

// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = bill<=300 && bill>=50 ? (0.15*bill):(0.20*bill);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
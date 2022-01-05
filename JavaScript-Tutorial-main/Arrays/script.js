'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], thsi.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngedients, ...otherIngredients) {
    console.log(mainIngedients);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  mainIndex: 2,
});

const [main, secondary] = restaurant.categories;
console.log(main, secondary);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 111;
let b = 120;
const obj = { a: 20, b: 40, c: 34 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [3, 4, 6];
const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

const oldString = 'jonas';
console.log([...oldString]);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(1, 2, 3, 4));

restaurant.orderPizza('mushroom', 'spinach', 'cabage', 'egg');

//returns 1st True value or returns last value is all are false --> ||
console.log('hello' || 3);

// restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

console.log(restaurant.numGuest || 10);

console.log(7 && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

// returns 1st false value or returns last value if all are true--->&&
restaurant.orderPizza && restaurant.orderPizza('spinach', 'nushroom');

//nullish value: null and undefined (NOT 0 or '') --> ??
restaurant.numGuest = 0;
console.log(restaurant.numGuest ?? 10);

const rest1 = {
  name: 'capri',
  numGuests: 0,
  owner: 'xyz',
};

const rest2 = {
  name: 'La Piazze',
  owner: 'Giovanni Rossi',
};

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= 'Anonymous';
console.log(rest1.owner);
rest2.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2);

for (const item of menu1.entries()) {
  console.log(item[0], item[1]);
}

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.thu?.open);

const properties = Object.keys(openingHours);
console.log(properties);

console.log(Object.values(openingHours));
console.log(Object.entries(openingHours));

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

const orderset = new Set([
  'pizza',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(orderset);

console.log(new Set('john'));

console.log(orderset.size);
console.log(orderset.has('pizza'));
console.log(orderset.has('cake'));
orderset.add('cheese');
orderset.delete('pizza');
// orderset.clear();
console.log(orderset);

for (const order of orderset) console.log(order);

const sshipe = ['waiter', 'captain', 'sailor', 'waiter', 'captain'];

const uniqueSship = [...new Set(sshipe)];
console.log(uniqueSship);

const rest = new Map();

rest.set('name', 'Messi');
rest.set(1, 'Fierenze, Italy');

rest
  .set('open', 11)
  .set('close', 12)
  .set(true, 'we are open 😎')
  .set(false, 'we are closed 😢');

console.log(rest);
console.log(rest.size);
console.log(rest.get('name'));
console.log(rest.has('open'));
rest.set(document.querySelector('h1'), 'Heading');

//Array methods
//map()
console.log('Map method');
const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
];

const combinedNames = names.map((element) => {
    return `Hello ${element.firstName} ${element.lastName}`;
});

console.log(combinedNames);

const rectangles = [
    { length: 30, width: 20 },
    { length: 10, width: 10 },
    { length: 40, width: 40 },
];

const areaOfRecatangles = rectangles.map((element) => {
    return element.length * element.width;
});

console.log(areaOfRecatangles);

//map exercise
const buttons = [
    {
      text: 'Button Text 1',
    },
    {
      text: 'Button Text 2',
    },
    {
      text: 'Button Text 3',
    },
];
  
const buttonElements = buttons.map((element) => {
    const btn = document.createElement('button');
    btn.innerText = element.text;
    return btn;
});
  
console.log(buttonElements);

//filter
console.log('Filter method');
const numbers = [1, 2, 3, 4, 5];
const filterNumbers = numbers.filter((item) => item >= 3);

console.log(filterNumbers);

const people = [
    { name: 'Kari', age: 28 },
    { name: 'Astrid', age: 32 },
    { name: 'Hans', age: 22 },
    { name: 'Inger', age: 19 },
    { name: 'Liv', age: 42 },
    { name: 'Kristoffer', age: 12 },
    { name: 'Anne', age: 12 },
    { name: 'Martin', age: 17 },
    { name: 'Joakim', age: 45 },
    { name: 'Ellen', age: 7 },
];

const peopleByAge = people.filter((item) => item.age > 18);
console.log(peopleByAge);

const students = [
    {
      studentName: 'Ola',
      mark: 50,
      isOnline: false,
    },
    {
      studentName: 'Kari',
      mark: 80,
      isOnline: true,
    },
    {
      studentName: 'Nora',
      mark: 60,
      isOnline: false,
    },
];

const filteredStudents = students.filter(({mark, isOnline}) => mark >= 75 && isOnline);
console.log(filteredStudents);

//reduce
console.log('Reduce method');

//Syntax
// const values = [100, 200, 300, 400, 500];

// const endResult = values.reduce(
//   (previousValue, currentElement, index, array) => {
//     return previousValue;
//   },
// );

const values = [5, 5, 5, 10];

const sumOfValues = values.reduce((total, item) => (total += item));

console.log(sumOfValues);

const products = [
    { title: 'Cheese', price: 15.0 },
    { title: 'Milk', price: 8.99 },
    { title: 'Bread', price: 22.0 },
    { title: 'Egg', price: 5 },
];

const sum = products.reduce((subtotal, item) => (subtotal += item.price), 0);
console.log(sum);

const newProducts = [
    { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
    { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
    { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
    { title: 'Egg', inStock: true, quantity: 12, price: 5 },
];

const subTotal = newProducts.reduce((subtotal, item) => {
    if (item.inStock) {
        subtotal += item.price * item.quantity;
    }
    return subtotal;

}, 0);

console.log(subTotal);

const subTotalNew = newProducts.reduce(
    (subtotal, item) => item.inStock ? (subtotal += item.quantity * item.price) : subtotal, 0);

console.log(subTotalNew);

const teams = [
    {
      name: 'Hawks',
      score: 60,
      isWinner: true,
    },
    {
      name: 'Dolphins',
      score: 50,
      isWinner: true,
    },
    {
      name: 'Falcons',
      score: 90,
      isWinner: false,
    },
    {
      name: 'Bears',
      score: 90,
      isWinner: false,
    },
];

const winningTeams = teams.reduce(
    (team, item) => {
        if (item.isWinner) {
            team[item.name.toLowerCase()] = item.score;
        }
            return team;
    }, {}
);

console.log(winningTeams);

//find and findIndex methods
console.log('find and findIndex method');

const users = [
  { name: 'Kari', id: 19313 },
  { name: 'Hans', id: 40202 },
  { name: 'Joakim', id: 59230 },
  { name: 'Inger', id: 14023 },
  { name: 'Ellen', id: 76339 },
];

const foundUser = users.find(({name}) => name[0].toLowerCase() === 'h');

console.log(foundUser);

const findValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foundIndex = findValues.findIndex((element) => element === 5);
console.log(foundIndex);

const findPeople = [
  {
    id: 0,
    firstName: 'Ola',
    lastName: 'Nordmann',
  },
  {
    id: 1,
    firstName: 'Kari',
    lastName: 'Nordmann',
  },
  {
    id: 2,
    firstName: 'Nora',
    lastName: 'Nordmann',
  },
];

const foundPerson = findPeople.find(({id}) => id === 1);
console.log(foundPerson)

// userId: 1,
// id: 3,
const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 4,
    title: 'veniam tempora',
    completed: true,
  },
];

const foundToDo = todos.find(({userId, id}) => userId === 1 && id === 3);
console.log('find', foundToDo);
const filterToDo = todos.filter(({userId, id}) => userId === 1 && id === 3);
console.log('filter', filterToDo);

//some and every methods
console.log('some and every methods');
const sampleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someValues = sampleValues.some((item) => item >= 4);
console.log(someValues);

const everyValues = sampleValues.every((item) => item >= 4);
console.log(everyValues);

//object methods
console.log('object methods');

//for ... in 
const person = {
  firstName: 'Ola',
  lastName: 'Nordmann',
  module: 'JavaScript',
};

for (const key in person) {
  console.log('key: ', key, 'value: ', person[key]);
}

//Object.keys(obj)
console.log(Object.keys(person));

//forEach()
Object.keys(person).forEach((item) => console.log('key: ', item, 'value: ', person[item]));

//map()
Object.keys(person).map((item) => console.log('key: ', item, 'value: ', person[item]));

//Object.values(obj)
console.log(Object.values(person));

//Object.entries(obj)
console.log('entries:', Object.entries(person));
Object.entries(person).forEach(([key, val]) => console.log('key: ', key, 'value: ', val));

//Chaining
console.log('Chaining 1');

const DISCOUNT_PERCENTAGE = 20;
const storeProducts = [
  { name: 'Milk', price: 5.0, inStock: true },
  { name: 'Cheese', price: 10.0, inStock: true },
  { name: 'Bread', price: 8.0, inStock: false },
  { name: 'Beans', price: 3.0, inStock: true },
  { name: 'Eggs', price: 12.0, inStock: true },
  { name: 'Rice', price: 4.0, inStock: false },
  { name: 'Meat', price: 25, inStock: true },
  { name: 'Coffee', price: 12.0, inStock: true },
  { name: 'Tea', price: 8.0, inStock: false },
  { name: 'Bottled Water', price: 4.0, inStock: false },
];

const discountProducts = storeProducts
  .filter(({price, inStock}) => price >= 5 && inStock)
  .map((item) => {item.discountedPrice = item.price - item.price*DISCOUNT_PERCENTAGE/100;
                  return item;}
                );

console.log(storeProducts);
console.log(discountProducts);

console.log('Chaining 2');
const allStudents = [
  { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
  { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
  { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
  { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
  { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
  { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
  { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
  { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
  { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
  { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const classAverage = allStudents
    .filter(({age, isOnline}) => age >= 30 && isOnline)
    .reduce((classAvg, stud, index, classArray) => {
      const studAvg = stud.results.reduce((avg, item) => avg += item/stud.results.length, 0);
      classAvg += studAvg/classArray.length;
      return classAvg
    }, 0
    );
console.log(classAverage);
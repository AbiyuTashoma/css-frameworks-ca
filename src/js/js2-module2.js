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

const filteredStudents = students.filter((item) => item.mark >= 75 && item.isOnline);
console.log(filteredStudents);
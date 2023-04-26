const myObject ={
    name0: 'Lenovo',
    type0: 'Thinkpad',
    use0: 'pc',
}

console.log("Original", myObject);

const stringifyMyObj = JSON.stringify(myObject);

console.log("Stringify", stringifyMyObj);

const parseMyObj = JSON.parse(stringifyMyObj);

console.log("Parsed", parseMyObj);

//storing data
localStorage.setItem('storeName', 'Ola');
localStorage.setItem('storeName2', 'Olalala');

//reteiving data
const storeName = localStorage.getItem('storeName');
console.log(storeName);

//remove item
localStorage.removeItem('storeName2');

//clearing storage
// localStorage.clear();

//session storage
const pet = {
    type: 'Dog',
    name: 'Lilje',
}

const petObj = JSON.stringify(pet);

sessionStorage.setItem('petString', petObj);
localStorage.setItem('localpet', petObj);

const petLocal = localStorage.getItem('localpet');
console.log(petLocal);
console.log(JSON.parse(petLocal));

//destructuring Objects: use same keys
const { name0, type0, use0 } = myObject;
console.log('destructuring');
console.log(name0, type0, use0);

//destructuring arrays: use variables
const coord = [1, 2, 3, 4, 5];

const [x, y] = coord;
const [a, , b] = coord;
const [d, e, ...remain] = coord;
console.log(x, y);
console.log(a, b);
console.log(d, e, remain);

//map .set .get .size .delete
const myMap = new Map();
myMap.set('key0', 1);
myMap.set('key1', 2);
console.log(myMap);
console.log(myMap.get('key1'));
console.log(myMap.size);

//set .add .has .size .delete
const mySet = new Set();
mySet.add(1);
mySet.add('1');
console.log(mySet);
console.log(mySet.has(1)); //check an element

//class
class Person {
    constructor (firstName, lastName = 'junk') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    speak () {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

const aPerson = new Person('Dave', 'chappel');
aPerson.speak();

//Closure, spread
function makeFunction(x) {
    return function (y) {
      return x + y;
    };
}
  
const add5 = makeFunction(5);
console.log('Closure');
console.log(add5(2));
console.log(add5(5));

const anObject = {
firstName: 'Ola',
lastName: 'Nordmann',
};

const newObject = { ...anObject };
console.log(newObject);

const array1 = [0, 1, 2];
const array2 = [3, 4, 5];

const newArray = [...array1, ...array2];
console.log(newArray);
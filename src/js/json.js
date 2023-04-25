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

//map
const myMap = new Map();
myMap.set('key0', 1);
myMap.set('key1', 2);
console.log(myMap);
console.log(myMap.get('key1'));
console.log(myMap.size);
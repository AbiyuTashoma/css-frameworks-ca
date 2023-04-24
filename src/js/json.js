const myObject ={
    name: 'Lenovo',
    type: 'Thinkpad',
    use: 'pc',
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
const myObject ={
    name: 'Lenovo',
    type: 'Thinkpad',
    use: 'pc',
}

console.log("Original", myObject);

const stringifyMyObj = JSON.stringify(myObject);

console.log("Stringify", stringfyMyObj);

const parseMyObj = JSON.parse(stringifyMyObj);

console.log("Parsed", parseMyObj);
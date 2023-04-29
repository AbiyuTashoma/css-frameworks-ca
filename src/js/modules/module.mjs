console.log('This is a module');

function functionOne() {
    console.log('Function One');
}

export function functionTwo() {
    console.log('Function Two');
}

function functionThree() {
    console.log('Function Three');
}

export { functionOne, functionThree };
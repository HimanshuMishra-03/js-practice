const score=400;//Here javascript detects that it is a number
console.log(score);

const number= new Number(1003)//Here we explicitly declare it as type Number
console.log(number);

console.log(number.toString().length);
console.log(number.toFixed(3));//it will keep 3 numbers afer decimal

console.log(number.toPrecision(3));

const other=100000000;
console.log(other.toLocaleString('en-IN'));

let any;
console.log(Number.MAX_VALUE);


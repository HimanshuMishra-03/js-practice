let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let createDate= new Date(2023,0,23,5,3);
let createDate= new Date("2023-11-22");
console.log(createDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(typeof myTimeStamp);

console.log(myTimeStamp);
console.log(createDate.getTime());

console.log(Math.floor(Date.now()/1000));

// let newDate=new Date();
// newDate.toLocaleString('Default', {
//     weekday:"long",
//     timeZone:'timeZone'
// })
// console.log(newDate);






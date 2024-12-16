//const arr=[1,2,3,4,true, "Himanshu"]//Here we can have different types of elements

//JS arrays are RESIZEABLE
//Arrays are accesed via index
//JS array copy operations create Shallow Copies

//Methods
//push and pop from back
const arr=[1,2,3,4,5]
arr.push(6);
console.log(arr);

//unshift and shift from front
let newarr=arr.join();
console.log(newarr);

//slice (Do not change original array)
//slice(start index, end index not included)
console.log("A ",arr);
let arr1=arr.slice(1,3);
console.log(arr1);
console.log(arr);


//splice (DO change original array)
//splice(start index, total numbers to be removed, new elements to be added)
let arr2=arr.splice(1,3);
console.log(arr2);
console.log(arr);

//
let marvel=["Hulk","Thor"]
let dc=["Aquaman","Batman"]
// console.log(marvel.push(dc));//push will add an array as an element
// marvel.push(dc);
let str=marvel.concat(dc)// concat concatenates two arrays into a new one
console.log(str);

//spread
let str1=[... marvel,... dc]
console.log(str1);


const arrayy=[1,2,3,[4,5,[6,7,[9,10,[11,12]]]]]
const another_arrayy=arrayy.flat(Infinity);
console.log(another_arrayy);


console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu"));
console.log(Array.from({name:"Himanshu"}));//It dont know whether to make array of key or value, hence it will return empty

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));


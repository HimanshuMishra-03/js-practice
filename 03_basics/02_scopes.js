let a=300
if(true){
    let a=100
    const b=100
    var c=69
    console.log("INNER: ",a);
    
}
console.log(a);
// console.log(b);   it will show error because b is scope bounded
console.log(c);

console.log(addOne(5))
function addOne(num1){
    return num1+1
}
// console.log(addTwo(5))//it will show error because if function is declared in this way then this line must come after the declaration whereas for above declaration its ok!
const addTwo=function(num1){
    return num1+2
}
console.log(addTwo(5))
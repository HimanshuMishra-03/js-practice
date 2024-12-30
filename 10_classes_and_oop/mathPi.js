// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
const obj= {
    username:"Himanshu",
    email:"himanshubmishra@gmail.com",
    code:0o3
}
console.log(Object.getOwnPropertyDescriptor(obj, "username"));
Object.defineProperty(obj, "username",{writable:false, enumerable:false})
console.log(Object.getOwnPropertyDescriptor(obj, "username"));
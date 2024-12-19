const tinderUser=new Object();
tinderUser.id="123"
tinderUser.name="Himanshu"
tinderUser.isLoggedIn=true;
console.log(tinderUser);

const regularUser={
    idd:"6969",
    namee:{
        fullname:{
            firstName:"Himanshu",
            LastName:"Mishra"
        }
    }
}
console.log(regularUser.namee);
console.log(regularUser.namee.fullname);
console.log(regularUser.namee.fullname.firstName);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2}
console.log(obj3);

const obj4=Object.assign(obj1, obj2)//Object.assign(target, source)
console.log(obj4);

const obj5=Object.assign({},obj1,obj2)//Object.assign(targe({}),source(more than 1))
console.log(obj5);
console.log("hi",obj5[1]);

//spreading method
const obj6={...obj1,...obj2}
console.log(obj6);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Object DeStructure
const course={
    courseName:"JS",
    couseFees:"2,05,000",
    courseInstructor:"Faculty"
}
// const {courseInstructor}=course;
// console.log(courseInstructor);

const {courseInstructor:Instructor}=course;
console.log(Instructor);


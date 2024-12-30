class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    // encryptPass(){
    //     return `${this.password}abc`
    // }
}
// const abc=new User("Himanshu","himanshubmishra@gmnail.com","123")
// console.log(abc.encryptPass());

//behind the scene 
function user(username, email, password){
    this.username=username
    this.email=email
    this.password=password
}
user.prototype.encryptPass=function(){
    return `${this.password}abc`
}
const neww=new user("Himanshu","himanshubmishra@gmail.com","182")
console.log(neww.encryptPass());

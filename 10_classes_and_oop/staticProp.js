class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const U=new User("Himanshu")
// console.log(U.createId());
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}
const any= new Teacher("Himanshu","himanshubmishra@gmail.com")
console.log(any.logMe());
console.log(any.createId());

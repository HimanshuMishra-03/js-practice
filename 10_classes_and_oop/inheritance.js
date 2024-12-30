class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    addCourse(){
        return `A new course was added by ${this.username} faculty`
        
    }
}
const t=new Teacher("Hitesh","c@c.com","003")
console.log(t);
console.log(t.addCourse());


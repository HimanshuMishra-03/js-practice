function setUsername(username){
    console.log("called");
    
    this.username=username
}
function createUser(username, email, password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}
const newUser=new createUser("Himanshu","himanshubmishra@gmail.com","182")
console.log(newUser);

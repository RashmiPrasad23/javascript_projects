class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email;
        this.pass=pass;

    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@email.com","1234")
chai.addCourse()
chai.logMe()
const masalaChai=new User("masala")
//masalaChai.addCourse()
masalaChai.logMe()

console.log(chai instanceof Teacher);
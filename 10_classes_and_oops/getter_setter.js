class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
     
    //helps to get value outside class
    get password(){
       return this._password.toUpperCase()
    }
    //to set value inside class
    set  password(value){
        this._password=value
    }
}

const hitesh=new User("hitesh@gmail.com","abc")
console.log(hitesh.password);


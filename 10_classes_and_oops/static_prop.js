class User{
    constructor(username){
      this.username=username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

     //jaise he ek user bne ,uske saath ek unique id attach kr de
    static createId(){ //create id ki access  sbko nhi dena chahte,isiliye static keyword use kiya
        return `123`
    }
}
const hitesh=new User("hitesh")
console.log(hitesh);
console.log(hitesh.createId());
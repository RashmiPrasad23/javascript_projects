let myName='hitesh     '
console.log(myName.length);

console.log(myName.trueLength); //ek method bnana hai

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
     console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyHitesh=function(){
    console.log(`hitesh says hello`);
}

myHeros.hitesh()
myHeros.heyHitesh()
heroPower.hitesh()
//heroPower.heyHitesh()


//inheritance
const User={
    name:"chai",
    company:"google"
}
const Teacher={
    makeVideo:true
}
const  TeachingSupport={
    isAvailble:false
}
const TASupport={
    makeAssignment:'JS assignment',
    __proto__:TeachingSupport
}
Teacher.__proto__=User //this is only inheritance

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherusername="chai aur code         "
String.prototype.trueLength=function(){
    console.log(`${this}`);
   //console.log(`${this.name}`);
   console.log(`true length is : ${this.trim().length}`);
}
anotherusername.trueLength()

"hitesh".trueLength()
"icetea  ".trueLength()
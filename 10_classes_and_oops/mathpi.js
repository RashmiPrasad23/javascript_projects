const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);  //ismei writable ek property hai jo ki false hai n itni hard coded hai ki we cant change it
//so we can also set these properties in our documents which will not change their value

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:false,

    orderChai:function(){
        console.log("chai nhi bni");
    }
}

console.log(chai);
                                    //chai ek obj hai not property ,isiliye chai ki name property pr check therefore usko pass kiy
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true  //iterate krne degi ye,if false toh nhi degi iterate krne
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(const [key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
    console.log(`key: ${key}, value ${value}`);
      
    }
}
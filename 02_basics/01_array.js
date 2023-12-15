//array can have different datatype for value
const arr=['0',1,2,4,'system']
console.log(arr);

const myHeroes=["shakti","naagraj"]
const myArr2=new Array(1,2,3,4)

//array methods
myArr2.push(6)
myArr2.push(7)
myArr2.pop()

myArr2.unshift(9)
// myArr2.shift()

console.log(myArr2);

console.log(myArr2.includes(9));
console.log(myArr2.indexOf(3));

const newArr=myArr2.join()  //converts the array into string
console.log(myArr2);
console.log(newArr);
console.log(typeof myArr2); //object type
console.log(typeof newArr);  //string type

// slice , splice

console.log("****************slice*****************");
console.log("A",myArr2);
const myn1=myArr2.slice(1,4)   //cuts the array to mentioned sizes...from starting index to ending index that is mentioned(end index -exclusive)
console.log(myn1);
console.log("B",myArr2);   // slice original array mei changes nhi krta hai..array cut kr kr new mei store krta hai but old mei no changes

console.log("****************splice*****************");
console.log("A",myArr2);
const myn2=myArr2.splice(1,4)   //cuts the array to mentioned sizes...from starting index to ending index that is mentioned(end index -inclusive)
console.log(myn2);         
console.log("B",myArr2);       //splice original array ko manipulate krta hai..i.e-> original array se data cut kr deta hai
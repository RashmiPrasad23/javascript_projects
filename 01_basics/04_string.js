const namee="rashmi";
const repocount=50;

console.log(`hello my name is : ${namee} and my repo count is ${repocount}`)

const gameName=new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//in substring we can have only positive index
const newString=gameName.substring(0,4)
console.log(newString);

//in slice we can have negative index as well
const anotherString=gameName.slice(-8,4)
console.log(anotherString);

// .trim() function trims the spaces and we can have only characters left in string
const newStringOne="   rashmi   "
console.log(newStringOne);
console.log(newStringOne.trim());


//replace() helps in replacing the part which we want to remove with other fxn
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))






//string ek obj type hai ans key value milenge ismei,ismei prototype k andr apne ko different methods milte hai




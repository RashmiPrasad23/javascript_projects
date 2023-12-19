const myNumbers=[1,2,3,4,5,6]

//map sbhi pr kaam krega n return krega
//filter mei cndition chahie hota hai for application
const newNums=myNumbers.map((num)=>num+10)
console.log(newNums);

//chaining
const newNumber=myNumbers
    .map((num)=>num*10) //idhr jo bhi value bnegi wo second chain mei paas ho jaayega
    .map((num)=>num+1)
    .filter((num)=>num>=40)

console.log(newNumber);
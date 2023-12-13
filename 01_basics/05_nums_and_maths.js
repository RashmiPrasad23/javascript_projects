const score=400
console.log(score);

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

/***************************************Maths***********************************/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));   //top value
console.log(Math.floor(4.3));   //down value

console.log(Math.min(4,3,6));
console.log(Math.max(4,13));


console.log(Math.random());  //0-1 k beech value
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)




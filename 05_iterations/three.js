//for of loop

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){
   console.log(num);
}

const greetings="hello world!"
for(const greet of greetings){
    console.log(greet);
}

//maps ->holds key value pairs ->no duplicate value,only unique value->in order
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India')
console.log(map);

for(const [key,value] of map){
    console.log(key,':',value);
}

//obj can't be iterated
const myObject={
    game1:'nfs',
    game2:'spiderman'
}
// for(const [key,value] of myObject){
//   console.log(key,value);
// }


//different ways to merge arrays

const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) //merging one vector in other ,changes the original array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const arr3=marvel_heroes.concat(dc_heroes)  //returns result in new array
console.log(arr3);

const all_new_heros=[...marvel_heroes,...dc_heroes] //using spread operator to merge all arrays
console.log(all_new_heros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherarray.flat(Infinity) //spread all complex arrays in another array
console.log(real_another_array);

//sometimes when we select data from websites we get data in different format like string,object but we need array
//so we can use Array.from for conversion

console.log(Array.isArray("Hitesh")); //checks if it is array or not 

console.log(Array.from("Hitesh")); //cnverts into array
console.log(Array.from({name:"hitesh"})); //will return empty array [] if cnversion not psbl (remember for interview)


//cnversion of variables into array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


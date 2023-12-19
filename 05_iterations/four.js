const myObject={
    //key:value
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

//(for of) loop obj pr kaam nhi kr rha tha
// object ko loop krne k liye (for in) loop hai

for(const key in myObject){
    console.log(key);
    console.log(myObject[key]);
    console.log(`key : ${key} and value : ${myObject[key]}`);
    console.log("****************");
}

//for in loop for array
const programming=["js","rb","c++"]
for(const key in programming){
    console.log(key);  //array ki keys index hoti hai...therefore no. print hua
    console.log(programming[key]); //value print
}

//map mei for in loop
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India')
// console.log(map);

//for in loop mai mei use nhi ho skta hai
// for(const key in map){
//     console.log(key);
// }

// obj mei loop ->use for in
//array mei loop-> use for of ,for in.....many more
//map mei loop->use for of


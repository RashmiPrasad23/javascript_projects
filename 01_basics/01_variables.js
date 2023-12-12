const accountId=144553
let accountEmail="rashmi23@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2         //not allowed to change const value

accountEmail="hcvdg@23.com"
accountPassword="2334"
accountCity="delhi"  //do not use this way to declare variable
let accountState;   //if we declare variable and value has not be assigned to it ,then it is undefined
console.log(accountId); 

/*
prefer not to use var
because of issue in block scope and function and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);  //for printing all variables in one table

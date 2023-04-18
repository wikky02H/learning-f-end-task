var VHypotenuse = "Kumar";
const CName = "VHypotenuse";
// console.log(name);
console.log("CName.indexof", CName.indexOf("u"));
console.log("CName.length", CName.length);
console.log("CName.replace", CName.replace("use","esu"));
console.log("CName.lowerCase", CName.toLowerCase());


let num_1 = 98;

switch(true){
    case (num_1 % 3 === 0 && num_1 % 5 === 0):
    console.log("Foo & Bar");
    break;

    case (num_1 % 3 === 0):
        console.log("Foo");
        break;

    case (num_1 % 5 === 0):
        console.log("Bar");
        break;
    default: console.log("Neither Foo nor Bar");
}

// let num=15;
// if(num % 3 === 0 && num % 5 === 0){
//     console.log("Foo & Bar");
// }else if (num % 3 === 0){
//     console.log("Foo");
// }else if (num % 5 === 0){
//     console.log("Bar");
// }else{
//     console.log("Neither Foo nor Bar");
// }

let num = 10;
let num_2 = 30;
is_number= false;
result = is_number ? num+num_2 : num-num_2
console.log("ass$sub",result);
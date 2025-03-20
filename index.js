let x = "Extravaganza";
let slice = x.slice(-4,);
console.log(slice);


const food = "The quick brown fox jumped over the lazy dog"
console.log(food.slice(0,4) + "eat"+food.slice(4));

const story ="The quick brown fox jumped over the lazy dog";
const story1 = story.toLowerCase();
console.log(story1.split("the").length-1);
console.log(story1.split("brown").length-1);


const string1 = "The pupils are reading";
console.log(string1.includes("are"));

const string2 = "The child was sitting on the table before it fell"
console.log(string2.includes("sitting"))

let a = "wonderful";
console.log(a.toUpperCase());

let b ="amazing";
console.log(b.toLowerCase());

let c = "undERneath";
console.log(c.toLowerCase());

// let d ="A wonderful world";
// let titlecase = d.toLowerCase();
// let titleCase = titlecase.split(" ");
//      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//      .join(" ");
//  console.log(titleCase);
 

 let string= "A wonderful world";
 let newString = string.toLowerCase();
 let titleCase = newString.split(" ");
 titleCase.forEach((string2, index)=>{titleCase [index] = string2.charAt(0).toUpperCase() + string2.slice(1)
 })
 console.log(titleCase.join(" "))

 



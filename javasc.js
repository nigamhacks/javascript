const student ={
    name: "sachin" , 
    class : "MCA", 
    cgpa : 7.06
}
//update object's variable 
student.name="sachin nigam";
console.log(name);

//let can not be redeclared , a block scope 
//const neither be redeclared nor updated, a block scope
//var can be redeclared and also be updated , a global scope

//array =>

let heroes =["ironman", "thor", "hulk", "spiderman", "antman"];
// console.log(heroes[2]);=> hulk
//defining a for loop
for(let hero of heroes){
    console.log(hero);
}

//print array items as a string 

console.log(heroes.toString());


let vegetables=["tomato", "potato", "baigan", "lady finger"];


 heroes= heroes.concat(vegetables);

console.log(heroes);

console.log(heroes.length);

//unshift()=> add element at start of the array 

console.log(heroes.unshift("superman"));

let x= heroes.slice();
console.log("deleted", x);

console.log(heroes.slice(0,3));

let numbers= [1,2,3,4,5,65,7,8,89,5];

numbers.splice(0, 0, 9,6,7,5)

console.log(numbers);
//inBuilt function  of array 
 
//  at()
 
//  concat()
 
//  Array()

//  copyWithin()
 
//  entries()

//  every()

//  fill()

// filter()

//  find()

//  findIndex()

// findLast()

//  findLastIndex()
 
//  flat()

//  flatMap()

//  forEach()

//  includes()

//  indexOf()
 
//  join()

//  keys()

//  lastIndexOf()

//  map()

//  pop()

//  push()

//  reduce()
 
//  reduceRight()

//  reverse()
 
//  shift()

//  slice(startIndex, endIndex)  

//  some()

//  sort()

//  splice(startIndex, delCount, newElement)
//  splice(add, remove no element , replace)

//  toLocaleString()

//  toReversed()

//  toSorted()
 
//  toSpliced()

//  toString()

//  unshift()
 
// values()

//  with()
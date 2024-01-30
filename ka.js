function myfunction(){
    console.log("welcome to my learning");
}

myfunction();

function sum(s, si){
    return s+si;
}

console.log("sum of 1 and 8 :", sum(1,8));

// arrow function is very important 
// modern javascript concept 

const myfunc=(a, b)=>{
    console.log(a+b);
}

 const fun =(x, y)=> {
    console.log(x*y);
}

//
let vow=['a', 'e', 'i', 'o', 'u'];

vow.forEach((val, i, vow)=>{
    console.log(val, i, vow );
});

//call back function is function passed as parameter

//map method 

//reduce  
let arr=[1,2,3,4,5,6];

// result - > always points at first pos and curr moves from 1 to n ;
const output= arr.reduce((result , curr)=>{

    return result+curr;
});

console.log(output);
// take n from the user
let n = prompt("enter number for finding the factorial ");
let t=[];

for(let i = 1; i<=n; i++ ){
    t[i-1]=i;
}

let factorial = t.reduce((res, curr)=>{
   return res*curr;
});

console.log("factorial = ", factorial);

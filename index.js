// // operations
// let a = 5 ;
// let b = 2;
// console.log("sum =",a+b)
// console.log("sub =",a-b)
// console.log("mul =",a*b)
// console.log("div =",a/b)
// console.log("modules=",a%b)
// console.log("exponential =",a**b)
// //unart operater
// let c=5;
// let d= 5;
// let e=12;
// let f =113;
// c++
// d--
// --e;
// ++f


// console.log("c pre increment",c)
// console.log("c pre increment",d)
// console.log("c pre increment",e)
// console.log("c pre increment",f)


// let a=5;
// let b=7;
// console.log ("a==b",a==b)//false
// console.log ("a!=b",a!=b)//true
// let c=5; // datatype is number
// let d="5";// datatype is string
// console.log("c==d",c==d)//true here it will check the value not he datatype
// console.log("c===d",c===d) // here it will check teh datatype also false
// // &&,||,! ,and, or ,not




//what is mean by closer in js

// function outer() {
//     var a = 20;

// console.log("a", a)

// }
// outer();


// let str = [10,20,30,40]
// size=0
// for (let i of str){
//     console.log("i=",i)
//     size++;
// }
// console.log("size",size)

// student ={
//     name:'saikishan',
//     age:26,
//     cgpa:7.5
// }
// for(let i in student){
//     console.log("i=",i,student[i])
// }
// function

// function fun(a){
//     console.log(a)
// }
// fun("this is saikishan")

// function myfunction(n,n1){
//     sum = n+n1
//     return sum
   
// }
// let value = myfunction(1,50);
// console.log("object",value)

// Arrow function
// const arrow=(x,y)=>{
//     console.log("add",x+y)
// }
// arrow(12,52)
//
// const arrow =(x,y)=>{
// mul=x*y;
// return mul
// }
// let m= arrow(23,34)
// console.log("multiple",m)
// vowels
 
// const vowel =(str)=>{
//    let count = 0;
//    for(let char of str.toLowerCase()){
//     if(char =="a" || char == "e"||char == "i" || char == "o"|| char == "u"){
//         count++

//     }
   
//    }
//    return count
// }
// let c =vowel("saikishan")
// console.log("number of vowels",c)
// const vowel =(str)=>{
//     const vowelset = new Set(["a","e","i","o","u"])

//     for(let char of str.toLowerCase()){
//         if(vowelset.has(char)){
           
//             console.log("times of character present of",char)
//         }
//     }

// }
// vowel("siiiikishanaaaaaa")
// foreach
// let arr = ["saikishan","vineeth","ravi"]
// arr.forEach((val,index,arr)=>{
//     console.log("val",val,index,arr)
// })
// map
// let arr =[22,15,100]
// let newarray =arr.map((val)=>{
// return  val*val
 
// })
// console.log("object",newarray)
// console.log("object.",arr)
//filter
// let arr = [22,25,52,12]
//  let newarray=arr.filter((val)=>{
//     return val%2 == 0
 
//  })
//  console.log("arr",newarray)

// document.getElementById("add-task-button").addEventListener("click", function() {
//     var taskInput = document.getElementById("task-input");
//     var taskText = taskInput.value.trim();

//     if (taskText) {
//         var taskList = document.getElementById("task-list");

//         var newTask = document.createElement("li");
//         newTask.textContent = taskText;

//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.className = "delete-button";

//         deleteButton.addEventListener("click", function() {
//             taskList.removeChild(newTask);
//         });

//         newTask.appendChild(deleteButton);

//         taskList.appendChild(newTask);

//         // Clear the input field after adding a task
//         taskInput.value = "";
//     }
// });


https://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList//

// Using the fetch API to get data from an endpoint
fetch("https://dummyjson.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    console.log("Data fetched from API:", data); // Use the fetched data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

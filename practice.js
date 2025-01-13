// STRING INTERPOLATION
let a = "Foram"
let b = `My name is ${a}`
console.log(b)

// ARRAYS RUN THIS IN CONSOLE 
// let arr = []
// let c = Number(prompt("How many numbers do you want to add:"))

// for (let i = 0; i < c; i++) {
//     let n = Number(prompt("Enter number:"))  // Convert input to number
//     arr.push(n)
// }
// console.log(arr)


//FOR EACH LOOP 
const array=[1,2,3,4,5]
array.forEach((variable)=> 
    {
    variable=variable+1
   console.log(variable) 
})

console.log("js objects") 
const obj={
    firstname:'Foram',
    lastname:"Amin",
    "Year":2006,
    "middlename": "Kirankumar"

}
console.log(obj.firstname)
console.log(obj["lastname"])
console.log(obj.Year)
console.log(obj.middlename)

//USING SYMBOL AS A KEY 
const symb= Symbol("Key1")
console.log("Symbol as a key : ")
const obj2={
    name:"Bugatti",
    no:1234,
    [symb]:44
}
//FREEZING AN OBJECT
console.log("Freezing an object : ")

console.log(typeof(obj2[symb]))
Object.freeze(obj2)
obj2.name="Ferrari"
console.log(obj2.name)
//FUNCTIONS 

obj.greeting=function(){
    console.log("Hello ")
}
console.log(obj.greeting())
obj.age=19
console.log(obj.age)

obj.greeting2= function(){
    console.log(`Hello  ${this.firstname}`)
}
console.log(obj.greeting2())
obj.greeting2(); 

//MORE ABOUT OBJECTS 
const info={
     fname:"Ayushi",
     lname:"Shah",
     salary:50000
}
console.log(Object.hasOwnProperty("fname"));
console.log(Object.keys(info));

//Object destructure 
const {fname : fn}=info
console.log(fn);
console.log(info.fname);

//FUNCTIONS
function sum(a ,b){
    console.log(a+b);
    
}
function minus(a ,b){
return a-b    
}
let s=sum(1,2)
let m=minus(2,"1")
console.log(m);
sum(1,"2")
sum(1,null)
//CONSOLE NO RETURN
let s1=sum(1,2)
console.log("Result is : " ,s1);

//PRACTICE FUNCTION 
function hello(username){
    if(!username){
        return console.log("Enter a  username ");
        
    }
    return `${username} hello ,have a great day !!`
}
console.log(hello(5))
console.log(hello())

//IF WE DONT KNOW HOW MANY PARAMETERS ARE THERE TO BE PASSED THEN:
function add(val1 , val2 , ...num){
    console.log(val1,val2);
    let s=0;
    let n=num.length
    for(let i=0;i<n;i++ ){
        s+=num[i]
    }
    return s
}
console.log(add(1,2,3,4,5,6));

//Passing object as a parameter 
function objf(anyobject){
    console.log(`Hello ${anyobject.firstnam} ${anyobject.lastname}`);
    
}
objf(obj)

//PASSING ARRAYS 
const arr=[1,2,3,4,5]
function arraysecond(anyarray){
    return anyarray[1]
}
console.log(arraysecond(arr));

//SCOPING OF VARIABLE
if(true){
    let a=10;
    var d=20;
    const c=30;
}
// console.log(a);
// console.log(c);
console.log(d);

//THIS KEY WORD 
console.log(this);
function thisf(){
    let name="Foram"
    const obj3 ={
        name1:"Foram",
        age:19
    }
    console.log(this.name);
    console.log(this.name1);
    
}
thisf()
//SIMILARLY
const obj4={
    name :"Foram",
    age:19,
    greet:function(){
        console.log(this.name);
    }
}
obj4.greet()

//IIFE
(function i1(){
    console.log("One iife");
    
}) ();

((name)=>{
    console.log(`${name} hello , iife two..`);
    
})("Foram")
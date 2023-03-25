/*
var obj = {
    num:5
}
var sum= function(x,y,z)
{
    return this.num+x+y+z;
}

console.log(sum.call(obj,5,5,1));
// call attatches fucntion with object temporarily
// also instead of argument we can create an array
arr=[1,2,3];
console.log(sum.apply(obj,arr));

// bind 

var binding= sum.bind(obj)
console.log(binding(1,2,3));

// time span var and let- closure concept

function x()
{
    for(let i=1;i<=5;i++) // with var it will give 6,6,6,6,6 
    {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
}
x();
/*
function x()
{
    for(var i=1;i<=5;i++) // with var it will give 6,6,6,6,6 
    function close(y){
    {
        setTimeout(function() {
            console.log(y);
        }, y*1000)
    }
close(i)
}
}
x();*/

// normal function is a function statement
// function expression- var b= function(){      } // we cant call this fxn before initialisation of gunvtion or it will throw an error
// differencebetween two  is because of hoisting

// first class functions- the ability to use functions as values is known as fist class functions
// functions are first class citizen in js, we can take a fxn and pass it into another
//function and these are called call back fxn
// function x(){}
//x(function(y){})      == here y is the callback function
// eg- setTimeout(function z(){ console.log("timer")};, 5000) --- here function z is the call back function

// at first fucntion would get called
// the set time outs on call back queue would get called
// asynchronous js and event loop

// event loop checks the call back queue and puts the function in call stack. it works like a gate keeper


function fun1(){
    console.log("a")
    }
    function fun2(){
    console.log("b")
    }
    fun2()
    fun1()


   // Q) what are the things not part of js?
    // a) set out time, DOM APIs, fetch(), console, location, url are part of Web APIs not JS
// Q) How JS uses web browsers?
    //A) browsers gives access to java script engines to use the functionality through a keyword called "windows".
    // so windows gives access as it is a global object.
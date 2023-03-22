
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

//currying- one function returning another function and we want to call both of them


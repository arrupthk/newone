//alert('hey guys');

const fruits =['orange','apple','banana','grapes'];
console.log(fruits);
fruits.push('chiku');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('strawberries');
console.log(fruits);
fruits.shift('mango');
console.log(fruits);

console.log(Array.isArray(fruits)); //true
console.log(Array.isArray('Heyyy')); //false
console.log(fruits.indexOf('grapes')); //false

//object

const person = {
    fn : 'sona',
    ln : 'kumari',
    age: '30',
    hobbies:['sketching', 'reading', 'jogging'],
    address: {   //embedded objects
        street:'main street',
        city:'patna',
        state:'na'
    }
}

console.log(person.hobbies[2]);

//destructuring
const {fn, ln, address:{city}} = person;
console.log(person.fn); 
console.log(person.address.city); 

person.email ="arrupthk1009@gmail.com"; // we can directly add properties
console.log(person);

// array to an object

const todo =[
    {
    id :'1',
    text :'g1',
    status : 'working'
    },

    {
        id :'2',
        text :'g2',
        status : 'completed' 
    },
    {
        id :'3',
        text :'g3',
        status : 'pending' 
    }
];

console.log(todo);
console.log(todo[1].text);
 //json- it stands for javascript object notation
 //  it is a light weight format for storing and transporting data
 // it is a structural format for exchanging data between server and web application



const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

//for of loop- we can use values of the objects directly from string and array, without using index 
// for in - we can use keys of objects and index no. of arrays
//eg of for of
/*
const nm ="shweta";
for (let NM of nm)// to get values of arrays, strings and sets
{
    console.log(" letter given  " + NM); // without index no.
}


const forin = ["rat",1,2,3,4,5,6,"pigeon"];
for(let infor in forin)
{
    console.log("trying forin here" + forin );
}
*/

for (let todos of todo)
{
    console.log(todos.id);
}



//foreach

todo.forEach(function(todos)
{
    console.log(todos.status);
}
)

// map
todo.map(function(todos)
{
    return todos.status;
}
);


//function 

function addition(num1, num2){
    return num1+num2;
}
console.log(addition(5,4));
//arrow functions

const add= (a,b) =>{ return a+b; }
console.log(add(9,7));

const add2= (a,b) =>a+b; 
console.log(add2(6,7));

//constructor function
function details(name,ln,cl,gender)
{
    this.name=name;
    this.ln=ln;
    this.cl= cl;
    this.gender= gender;
    this.getFullname = function() {
        return '${this.name} ${this.ln}';
    }
}

//instantiate object

const object = new details("rishi",'9','M');
console.log(object);
console.log(object.gender);
console.log(object.getFullname);





























//initialising 1st web dev
// starting with git hub
// initializing again
// javascript DOM course
console.dir(document); // this would give all the properties and methods attatched to the document
console.log(document.domain); // gives local host
console.log(document.URL); // gives entire url
console.log(document.title); // gives the title
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
// query selectors
//getelementsbyid 

var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = "changing the title";
headerTitle.innerText ="Another change";
// difference between text content and inner text is that we can add style to inner text, rest most are same

headerTitle.innerText = 'Changing H series';
headerTitle.style.borderBottom = 'solid 3px #000';

//getelements by classname

var items  = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].innerText= "Section 2";
items[1].style.fontweight = "bold";
//items[1].style.backGroundColor = "yellow";
// get elements by tag name

var change = document.getElementById('main');
console.log(change);
console.log(change[0]);
change.style.fontweight = 'bold';
change.style.backgroundColor = 'pink';

//query selector
var qs=document.querySelector('#main-header');
qs.style.borderBottom = 'solid 4px  #ccc';

var qs1 = document.querySelector('input');
qs1.value = "hands-on";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var clr = document.querySelector('li');
clr.style.color = "red";


// quertselectorall

var titles1 = document.querySelectorAll('li:nth-child(odd)');
var titles2 = document.querySelectorAll('li:nth-child(even)');

for(var i =0; i<= titles1.length ; i++)
{
   // titles1[i].style.backgroundColor= "green";
   // titles2[i].style.backgroundColor= "blue";
}

// ----------------------------------------------------------------------------------------------
//first dom ready to be uploaded

// traversing the dom
var itml = document.querySelector('#items');
// parentNode
console.log(itml.parentNode);
itml.parentNode.style.backgroundColor = 'orange';

console.log(itml.parentNode.parentNode);
console.log(itml.parentNode.parentNode.parentNode);

// childnode - HTML collection and irrelevant node list


console.log(itml.parentNode.childNodes);

//children- more precise - HTML collection

console.log(itml.children[2]);
itml.children[2].style.backgroundColor = 'yellow';

//firstchild

console.log(itml.firstChild);
console.log(itml.firstElementChild);
itml.firstElementChild.innerText = "brown mundae";
itml.lastElementChild.innerText = "blue eyes";
itml.children[3].textContent = " dehradun";
itml.children[2].style.fontweight = " bold";
itml.children[2].style.background = " red";
itml.children[3].textContent = " dehradun";

// previous sibling

console.log(itml.previousElementSibling);
itml.previousElementSibling.style.backgroundColor = " purple";

//createElement

// Create a div

var newDiv = document.createElement('div');
console.log(newDiv);
//add class name
newDiv.className ="HEYYA!";
// add id
newDiv.id = "HMMM";
// add attr
newDiv.setAttribute('title','Hello div');
console.log(newDiv);
// create text node
var newDivtext = document.createTextNode('hello world');
// add text to div
newDiv.appendChild(newDivtext);
console.log(newDiv);

var container = document.querySelector('header, container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);





























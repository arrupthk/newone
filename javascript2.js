const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));

const items = document.querySelectorAll('.item');
items.forEach((item) => {
    console.log(items);
});


const ul = document.querySelector('.container');
console.log(ul);

ul.firstChild.textContent = "jungle book";

const ab = document.querySelectorAll('.items');
console.log(ab);

const button = document.querySelectorAll('.btn');
console.log(button);
//button.style.background = "red";

const as = document.getElementById('my-form');
as.style.backgroundColor = "orange";

const qw = document.getElementById('name');
console.log(qw);
qw.firstChild="gora";

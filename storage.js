//local storage
localStorage.setItem('name','bob');
console.log(localStorage.getItem('name'));

// session storage
sessionStorage.setItem('name', 'sita');
console.log(sessionStorage.getItem('name'));

//cookie session
document.cookie = 'name-Kyle; expires=' + new Date(9999,0,1).toUTCString();
document.cookie = 'lname-brown; expires=' + new Date(9999,0,1).toUTCString();

console.log(document.cookie);

console.log('hi');
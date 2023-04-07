const posts = [
    { title:'post one', body:'this is not post one'},
    
    { title:'post two', body:'this is not post two'}
];

function getPosts() {
    setTimeout(() =>{
        let output= '';
        posts.forEach((post)=> {
            output +=  post.title + ' :  '+ post.body  ;
    });
    document.body.innerHTML = output;
    },1000);
}



createPost(post)
 {
     return new Promise((resolve,reject) => {
    setTimeout(() => {
        posts.push(post); 
const error= false;

if(!error)
{
    resolve();
}
else {
    reject('Error: Something went wrong');
}   },2000);
 });   
}

/*createPost({ title: 'post three', body: 'this is post three'}) this is one alternate
.then(getPosts).catch(err =>console.log(err));*/ // now switching to promise all


// prmose all
const pm1= Promise.resolve("hello world");
const pm2 = 10;
const pm3 = new Promise((resolve, reject) => 
 setTimeout(resolve, 2000, 'Goodbye'));
 //const pm4 = fetch('C:\Users\SONY\git_folder\newone\currying.js').then(res=> res.json());


 Promise.all([pm1,pm2,pm3,]).then(values => console.log(values));


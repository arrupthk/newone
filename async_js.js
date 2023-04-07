// callback, promises
/*
const posts =[ 
    { title:'post one', body:'this is post one'},
    { title:'post two', body:'this is post two'}
];

function getposts(output)
{
    setTimeout(()=> {
        let output ='';  */
      /*  for(i=0;i<posts.length; i++)
        {
            output= output +'<li> ${posts[i].title} - last updated ${currenttime - createdAt </li>';
        }*/
       /* posts.forEach((post, index) => {
            output +='<li> ${posts[i].title} </li>';
        });
       document.getElementById("demo").innerHTML = output ;
        }, 1000);
    }
    function createpost(post, callingback)
    {
        setTimeout(() => {
             posts.push(post); 
             callingback();
        },2000);
    }
createpost({title:'Post Three', body: 'this post three'}, getposts);
*/

//promises

const posts =[ 
    { title:'post one', body:'this is post one'},
    { title:'post two', body:'this is post two'}
];

function getposts(output)
{
    setTimeout(()=> {
        let output ='';
        posts.forEach((post, index) => {
            output +='<li> ${posts[i].title} </li>';
        });
       document.getElementById("demo").innerHTML = output ;
        }, 1000);
    }
    function createpost(post)
    {
        return new Promise((resolve,reject) =>{

            setTimeout(() => {
                posts.push(post); 
                const error= false;
                if(!error)
                {
                    resolve();
                }
                else {
                    reject('Error- something went wrong');
                }
           },2000);
        });
    }

/*
    createpost({title:'Post Three', body: 'this post three'}).then(getposts)
    .catch(err=>console.log(err));*/

    //promise.all

   /* const promise1= Promise.resolve("Hello World");
    const promise2= 10;
    const promise3= new Promise((resolve,reject) =>
    setTimeout(resolve,2000, 'Goodbye'));
    const promise4= fetch("C:\Users\SONY\git_folder\newone\async_js.js").then(res=> res.json());
 
    Promise.all([promise1,promise2,promise3, promise4]).then( values => console.log(values));*/

//async function
/*
async function init()  {
    await createpost({title: 'Post Three', body :'This is post three'});
    getposts();
}
init(); */

// async / await / fetch

async function fetchusers() {
    const res = await fetch('C:\Users\SONY\git_folder\newone\call_and_bind.js');
    const data = await res.json();
    console.log(data);
}

fetchusers();

const users = [ {name:"user1"} , {name: "user2"}, {name:"user3"}];

function createuserdetails()

{

  setTimeout(() =>{

    let output= '';

    users.forEach((post)=> {

     let a= new Date();

     let b = a.getTime();

     output += post.name +b; 

     console.log(output); 

  });

  document.body.innerHTML = output;

  },1000);

}

function createPost(post)

{

  return new Promise((resolve,reject) => {

    setTimeout(()=> {

    users.push(post);

    const trial= false;

    if(!trial){

      resolve()}

    

    else {reject("404: not found")} },1000);

  } );

}

 

function updateLastUserActivityTime()

{

  return new Promise((resolve,reject) => {

    setTimeout(()=> {

      const trial2= false;    

    if(!trial2){

    resolve()

    }

    else {

      reject("Error: in the code")

    }

    },1000)

  })

}

let promises = [createPost({name: "user4"},{name: "user5"},{name: "user6"}),updateLastUserActivityTime()];

Promise.all(promises).then((res)=> {

  console.log(res);

})

.catch((error)=> console.log("error found"));
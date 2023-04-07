const users = [ {name:"user1", time: "2nd april 2023" }];
function createuserdetails()
{
    setTimeout(() =>{
        let output= '';
        users.forEach((post)=> {
         users.time = new Date().getTime();
         output += post.name + users.time//+b;  
         console.log(output);   
    });
    document.body.innerHTML = output;
    },1000);
}
 createPost(post)
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
 
 updateLastUserActivityTime()
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

let promises = [createPost({name: "user4"},{name: "user5"},{name: "user6"})/*,updateLastUserActivityTime()*/];
Promise.all(promises).then((createuserdetails)=> {
})
.catch((error)=> console.log("error found"));
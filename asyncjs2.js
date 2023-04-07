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
    setTimeout(() => {
        posts.push(post) },2000);
}
getPosts();
createPost({ title:'post three', body:'this is post three'}, getPosts);

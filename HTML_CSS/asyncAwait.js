/*async function asAw(){
    setTimeout(()=>{
        //console.log("The timeout")
        return ("The timeout");
    },5000);
    //return "This is async/await example";
}
//resolved the promise here
asAw().then(function(output){
    console.log(output) ;
})*/
//console.log(asAw()) ;
//Instagram example


likeCode=async()=>{
    return new Promise((likingPost)=>{
        setTimeout(()=>{
        likingPost("Liked the post created")
       },2000)
    })
}
commentCode=async()=>{
    return new Promise((commentingPost)=>{
        setTimeout(()=>{
        commentingPost("Comment posted to the post created")
       },5000);
    });
}

async function createPost(){
    var post=new Promise((cPost)=>{
        setTimeout(()=>{
            cPost("Post created successfully")

    },1000);

   });
   
   var[post,like,comment]=await Promise.all([post,likeCode(),commentCode()])
   console.log(await post);
   console.log(await likeCode());
   console.log(await commentCode());
}
createPost()
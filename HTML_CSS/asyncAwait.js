async function asAw(){
    setTimeout(()=>{
        //console.log("The timeout")
        return ("The timeout");
    },5000);
    //return "This is async/await example";
}
//resolved the promise here
asAw().then(function(output){
    console.log(output) ;
})
//console.log(asAw()) ;
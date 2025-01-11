/*function promiseExample(flag){
    return new Promise(function(resolve,reject){
        if(flag===1){
        resolve("This is a promise resolve example")
        }
        else if(flag===0){
            reject("This is a promise rejection example")
        }
    })
}
promiseExample(3).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})*/


//Promise Location Finder Example
//Pass 2 things-->SECE -Melbourne,2000
locationFinder=(location,time)=>{
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
        if(isLocationValid(location,time)){
            locFound([location,"Found in",time,"millisecs"])
        }
        else{
            locNotFound([location,"not Found in",time,"millisecs"])
        }
    },time)
    })
}
function isLocationValid(loc,time){
    location="Melbourne"
    t=2000
    if(loc===location&&time<=t){
        return true
    }else{
        return false
    }
}
locationFinder("Melbourne",2000).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
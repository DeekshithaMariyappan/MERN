import { useEffect,useState} from "react";
var UseEffect=()=>{
    var[text,setText]=useState("")
    useEffect(()=>{
        console.log(text)
    },[text])
    return(
        <div>
            <h1>This is useEffect Example</h1>
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>            
            <h4>The text is {text}</h4>
        </div>
    )
}
export default UseEffect;

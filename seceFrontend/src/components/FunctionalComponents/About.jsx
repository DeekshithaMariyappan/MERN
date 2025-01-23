import {useState} from 'react';
const About=()=>{
    var[text,setText]=useState("Deekshitha")
    function handleText(event){
        setText(event.target.value)
    }
    var styling={
        textAlign:'center'
    }
    return(
        <div style={styling}>
            <h1>Hello,Deekshitha!</h1>
            <h2>TextArea:</h2>
           {/*<textarea value={text} onChange={(event)=>setText(event.target.value)}/>*/}
            <textarea value={text} onChange={handleText}/>   
            <p>The text is {text}</p>
        </div>
    )
}
export default About;
import { useState } from "react";

export const Form = () =>{
    const[text,setText] = useState("")
    const[submitedname,setSubmitedname] = useState("")
    const[password,setPassword] = useState("")
    const[submitedpass,setSubmitedpass] = useState("")
    const handlerSubmit = () => {
        if(!text && !password)return
        
            
        setSubmitedname(text)
        setSubmitedpass(password)
        setText("")
        setPassword("")
    }
    return(
        <>
            <div>
                <h1>Registration form</h1>
                Enter Name : 
                <input type="text" value={text}
                onChange={eve => setText(eve.target.value)}
                placeholder="Enter Name"/> <br />
                
                Enter password : 
                <input type="password" value={password}
                onChange={eve => setPassword(eve.target.value)}
                placeholder="Enter Password"/> <br />
                
                <button onClick={handlerSubmit}>Submit</button>
                <p>{submitedname}</p>
                <p>{submitedpass}</p>

            </div>

        </>
    );

}
import { useState } from "react";

export const Form = () =>{
    const[text,setText] = useState("")
    const[submitedname,setSubmitedname] = useState("")
    const[password,setPassword] = useState("")
    const[submitedpass,setSubmitedpass] = useState("")
    const[radio,setRadio] = useState("")
    const[checkbox,setCheckbox] = useState(false)
    const handlerSubmit = () => {
        if(!text || !password)return
        
            
        setSubmitedname(text)
        setSubmitedpass(password)
        setText("")
        setPassword("")
        setRadio("")
        setCheckbox(false)
    }
    function handlerRadio(eve){
        console.log(eve.target.value)
        setRadio(eve.target.value)
    }
    function handlderCheckbox(e){
        console.log(e.target)
        console.log(e.target.checked)
        setCheckbox(e.target.checked)
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

                Select Gender :
                <label>
                    <input type="radio" value="Male" checked={radio == "Male"}
                    onChange={handlerRadio} /> Male
                </label>
                <label >
                    <input type="radio" value="Female" checked={radio == "Female"}
                    onChange={handlerRadio}/>Female
                </label> <br />

                <label >
                    <input type="checkbox" checked={checkbox} onChange={handlderCheckbox}  /> <a href="#">Accept term and condition</a>
                </label>
                

                <button disabled={!checkbox} onClick={handlerSubmit}>Submit</button>

                <p>{submitedname}</p>
                <p>{submitedpass}</p>
                <p>{radio}</p>
                

            </div>

        </>
    );

}
import { useState } from "react";


export const Count = () =>{
    const [count,setCount] = useState(0);
    
    // Increment arrow function
    const handlerIncrement= () =>{
        setCount(count+1)
    }

    // Decrement arrow function
    const handlerDecrement = () =>{
        setCount(count-1)
    }
    // Reset arrow function
    const handlerReset = () => {
        setCount(0)
    }
    return(
        <>
            <div className="countContainer">
                <h1>{count}</h1>
                <button onClick={handlerIncrement}>Increment</button>
                <button onClick={handlerDecrement}>Decrement</button>
                <button onClick={handlerReset}>Reset</button>
            </div>
        </>
        
    );
}
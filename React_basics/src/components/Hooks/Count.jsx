import { useState } from "react";
import styles from "/src/components/Hooks/Count.module.css"

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
            <div className={styles.container}>
                <h1>Count Example</h1>
                <h1>{count}</h1>
                <button onClick={handlerIncrement}>Increment</button>
                <button onClick={handlerDecrement}>Decrement</button>
                <button onClick={handlerReset}>Reset</button>
            </div>
        </>
        
    );
}
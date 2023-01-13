// Code Keypad Component Here
import React from "react";

function Keypad (){
    
    return (
        <div>
            <input 
                type="password" 
                onChange={()=>console.log("Entering password...")}
                placeholder="Enter password"
            />
        </div>
    )
}

export default Keypad;
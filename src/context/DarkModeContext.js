import React, { createContext, useState } from "react";
const DarkModeContext = createContext();


const DarkModeProvider = (props) => {
    const [DarkMode, setDarkMode] = useState(false);

    const ToggleDarkMode = () => {
        setDarkMode(!DarkMode)
    }


    return (
        <div>
            <DarkModeContext.Provider value={{DarkMode,ToggleDarkMode}}>
            {props.children}
            </DarkModeContext.Provider>
        </div>
    )
    
}


export  {DarkModeContext, DarkModeProvider}
import { createContext,useContext,useState } from "react";

const navContext = createContext();

export const ContextProvider = ({children})=>{
    const [nav,setNav]=useState("home")
    return <navContext.Provider  value={{nav,setNav}} >
        {children}
    </navContext.Provider>
}

export const useNav = ()=> useContext(navContext)
import { useState } from "react";
import { ButtonContext } from "./Context";
import { useContext } from "react";


export const ButtonContextProvider = ({ children }) => {
    const [type, setType] = useState('submit')
    const [text, setText] = useState('Register Now')
    return (
        <ButtonContext.Provider value={{ type, text ,setType,setText }}>
            {children}
        </ButtonContext.Provider>
    )
}
export const useButtonContext = () => useContext(ButtonContext)
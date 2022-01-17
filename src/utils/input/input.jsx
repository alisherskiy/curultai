import React from 'react'
import "./input.scss" 
 
const Input = ({type, placeholder, value, setValue}) => { 
    return ( 
        <input 
        className={type  === "checkbox"? "check" : "MainInput"} 
        onChange={event => setValue(event.target.value)} 
        value={value} 
        type={type} 
        placeholder={placeholder} /> 
    ) 
} 
 
export default Input;
import React from 'react'

import { RiSearch2Line } from "react-icons/ri"

import './input.scss'

const Input = () => {
    return (
        <div className='input'>

< RiSearch2Line className='icon' size={35} color='#3495fd' /><input type="text" placeholder='Трек, артист, альбом'  />

            
        </div>
    )
}

export default Input

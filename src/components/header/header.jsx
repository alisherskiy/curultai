import React from 'react'
import {Link} from 'react-router-dom'

// icons
import { VscHome} from "react-icons/vsc"
import { RiFireLine } from "react-icons/ri"
import { MdOutlinePersonOutline } from "react-icons/md"
import { AiOutlinePaperClip } from "react-icons/ai"
import { BiLink } from 'react-icons/bi'
import { GrInstagram } from 'react-icons/gr'
import { AiFillYoutube} from "react-icons/ai"
import { FaTelegramPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GrFacebook } from 'react-icons/gr'
import { MdRadio } from 'react-icons/md'
import { HiOutlinePencilAlt } from 'react-icons/hi'

// scss
import './header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/home"> <img className='logo' src="./images/img/curltai.png" alt="logo" /></Link>
                    <input type="checkbox" id="burger"/>
                        <label for="burger"></label>
        <nav>
            <ul>
                <li><VscHome size={35} className='icon'/><Link to="/home">Главное</Link></li>
                <li><RiFireLine size={35} className='icon'/><Link to="/folk" >Curltai Folk </Link><span>NEW</span></li>
                <li><MdRadio size={35} className='icon'/><Link to="fm">Curltai FM</Link></li>
                <li><HiOutlinePencilAlt size={35} className='icon'/><Link to="zayavka">Cодтрудничество</Link></li>
                <li><MdOutlinePersonOutline size={35} className='icon'/><Link to="/artist" >Исполнители</Link></li>
                <li><AiOutlinePaperClip size={35} className='icon'/><Link to="/about">О нас</Link></li>
            </ul>

        </nav>
            <div className='links'>
            < BiLink className='url' color='#3495fd' size={30}/> <a href="https://www.instagram.com/curltai/?hl=ru" target="_blank" rel="noopener noreferrer"> <GrInstagram className='inst' color='#fff' size={20}/></a> <a href="https://www.youtube.com/channel/UCo3o3zo8WQjUqCoLXBuLo_g" target="_blank" rel="noopener noreferrer"><AiFillYoutube className='tube' color='#fff' size={25}/></a> <a href="https://t.me/joinchat/AAAAAFVakxLwrJfVwbKfig" target="_blank" rel="noopener noreferrer"> <FaTelegramPlane className='mail' color='#fff' size={22}/></a> <a href="https://www.facebook.com/curltaimusic/" target="_blank" rel="noopener noreferrer"><GrFacebook className='face' color='#fff' size={20} /></a> <a href="http://curltai.music@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail className='gmail' color='#fff' size={25}/></a>

            </div>
        </div>
    )
}

export default Header
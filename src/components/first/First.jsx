import React from 'react'

import { AiFillYoutube} from "react-icons/ai"

import'./first.scss'

const First = () => {
    return (

        <div className='first'>
            <h1>Топ хиты:</h1>

           
            <div className='songs'>
            
                <div className='firstPage' >

                <img src="./images/img/hotela.jpg" alt="pic" />
               <a href="https://youtu.be/5jvL5brDo2A" target="_blank" rel="noopener noreferrer"> <h3>Хотела делать<AiFillYoutube size={25} className='you'/></h3></a>
                <p>Ulukmanapo feat. Ammagin</p>
                </div>
           
                <div className='secondPage'>
                <img src="./images/img/otdavai.png" alt="pic" />
                <a href="https://youtu.be/gaNIXuxmJKs" target="_blank" rel="noopener noreferrer"><h3>Отдавай<AiFillYoutube size={25}  className='you'/></h3></a>
                <p>G-Voo</p></div>

                <div className='thirdPage'>

                <img src="./images/img/oi.jpg" alt="pic" />
                <a href="https://youtu.be/4v90lGR5E4g" target="_blank" rel="noopener noreferrer"><h3>Ойлорумда<AiFillYoutube size={25}  className='you'/></h3></a>
                <p>Bakr</p>
                </div>

                <div className='fopage'>
                <img src="./images/img/4yk.jpg" alt="pic" />
                <a href="https://youtu.be/vSGouxQT7Ok" target="_blank" rel="noopener noreferrer"><h3>Чык убагында<AiFillYoutube size={25}  className='you'/></h3></a>
                <p>7gen</p>
                </div>

                <div className='fivepage'>
                <img src="./images/img/baby.jpg" alt="pic" />
                <a href="https://youtu.be/8Lxey370yBI" target="_blank" rel="noopener noreferrer"><h3>Бейбижан<AiFillYoutube size={25}  className='you'/></h3></a>
                <p>Бегиш feat. Джая</p>
                </div>
                
                <div className='sixpage'>
                <img src="./images/img/you.jpg" alt="pic" />
                <a href="https://youtu.be/GMtFdNRNawc" target="_blank" rel="noopener noreferrer"><h3>I Got You<AiFillYoutube size={25}  className='you'/></h3></a>
                <p>Pishpek City</p>
                </div>
            </div>
        </div>
    )
}

export default First
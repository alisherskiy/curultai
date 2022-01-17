import React from 'react'
import { GrInstagram } from 'react-icons/gr'

import "./about.scss"


const About = () => {
    return (
      <div className='cardss'>

      <div className='ad'>
          <span>CURLTAI - нейтральная зона творчества.<p>Цель нашего объедения, это продвижение музыкальной культуры в Кыргызстане и не только. В данный момент, мы стали одной из самых доступных площадок для талантливых музыкантов.</p></span>
      </div>

      <hr />

      <h2>Наши проекты:</h2>

      <div className='projects'>
      <div> <img src="https://i.ibb.co/g4rkF6t/2.jpg" alt="" />
    <h4>CURLTAI ASIA <a href="https://www.instagram.com/curltai.asia/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    </div>
    <div> <img src="https://i.ibb.co/DfL6njq/photo-2021-12-25-21-18-51-2.jpg" alt="" />
    <h4>CURLTAI RADIO <a href="https://www.instagram.com/curltai_radio/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    </div>
    <div> <img src="https://i.ibb.co/s3G4DBg/folk.jpg" alt="" />
    <h4>CURLTAI FOLK <a href="https://www.instagram.com/curltai.folk/?hl=ruы" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    </div>
    <div> <img src="https://i.ibb.co/09mGr2K/aityshs.jpg" alt="" />
    <h4>AITYSH <a href="https://www.instagram.com/curltai.folk/?hl=ruы" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    </div>
      </div>

      <hr />

      <h2>Контакты:</h2>

        <div className='contacts'>

        <div className='number'>

        <h5>+996 505 888 009</h5>
        <h5>+996 7055555 74</h5>
        
        </div>

        <div className='madeby'>
        <p><a href="https://www.instagram.com/myrza.888/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='in' />Myrza Zhyrgalbekov</a></p>
        <p><a href="https://www.instagram.com/52herthz/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='in' />Alisher Sharipov</a></p>
        </div>

            </div>
      


   

   
  </div>
    )
}

export default About
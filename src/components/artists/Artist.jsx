import React from 'react'
import Rating from '../Rating'

import { GrInstagram } from 'react-icons/gr'

import './artist.scss'

const Artist = () => {
    return (
      <>
        <div className='cont'>
             <h1>Топ-Артисты: </h1>
        <div class="containerr">
    <div id="carousel">
      <figure><img src="https://i.scdn.co/image/ab67616100005174db9bf56a7a085bcf21591070" width={200}  height={200} alt=""/></figure>
      <figure><img src="https://mp3fat.com/uploads/posts/a52eaa94784e8af0be85fb0ec157a5fc.jpg"width={200}  height={200} alt=""/></figure>
      <figure><img src="https://i.scdn.co/image/ab6761610000e5ebb1c027cb915c01a6c0067d9e" width={200}  height={200} alt=""/></figure>
      <figure><img src="https://i.scdn.co/image/ab6761610000e5eb877d33af925b3248dc804a78" width={200} height={200} alt=""/></figure>
      <figure><img src="https://zvuk.top/img/collections/318971_big.jpg"width={200} height={200} alt=""/></figure>
      <figure><img src="https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/86/6e/76/866e76b2-6fa0-09ed-7da5-c4270bcecbec/pr_source.png/375x375cc.webp" width={150}  height={150} alt=""/></figure>
      <figure><img src="https://100biografiy.ru/wp-content/uploads/2020/10/3KE9rw7rmUI.jpg" width={200} height={200}  alt=""/></figure>
      <figure><img src="./images/img/belyi.jpg" width={200} height={200}  alt=""/></figure>
      <figure><img src="./images/img/eazy.jpg" width={200} height={200} alt=""/></figure>
    </div>
    <h2>Другие:</h2>
  </div>
</div>
    <div className='cards'>
    <div> <img src="./images/img/zhango.jpg" alt="" />
    <h4>JANGO <a href="https://www.instagram.com/ilovejango/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    <Rating />
    </div>
    <div> <img src="./images/img/gaijin.jpg" alt="" />
    <h4>GAIJIN <a href="https://www.instagram.com/b_jeka/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    <Rating />
    </div>
    <div> <img src="./images/img/freeman.jpg" alt="" />
    <h4>FREEMAN <a href="https://www.instagram.com/free_man_996/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    <Rating />
    </div>
    <div> <img src="./images/img/7gen.jpg" alt="" />
    <h4>7GEN <a href="https://www.instagram.com/7etigen/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    <Rating />
    </div>
    <div> <img src="./images/img/tamga.jpg" alt="" />
    <h4>TAMGA <a href="https://www.instagram.com/tamga__/?hl=ru" target="_blank" rel="noopener noreferrer"><GrInstagram color='#fff' className='icons' /></a></h4>
    <Rating />
    </div>
  </div>
  </>
           
    )
}

export default Artist

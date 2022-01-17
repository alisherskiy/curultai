import React from 'react'
import emailjs from 'emailjs-com'

import "./zayavka.scss"

const Zayavka = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_82rdbon','template_z8ra678',e.target,
    "user_LIyOlZ2A2kjNnS2u7rrKB").then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }
    return (
<div className="container">
    <div className='reclama'>
        <h2>Место для вашей рекламы</h2>
    </div>
  <h1>Обратная связь</h1>
  <form className='row' 
  onSubmit={sendEmail}>
   <div>
        <h3>Имя:</h3>
    <input  type="text" name='name' />
   </div>

<div>
<h3>Почта:</h3>
    <input className='form-control' type="email" name='user_email' />
</div>

<div>
<h3 className='co'>Сообщения:</h3>
    <textarea name="message"  rows="4" className='form-control' />
</div>
    <input type="submit" value='Отправить' className='btn'/>
  </form>
</div>
    )
}

export default Zayavka
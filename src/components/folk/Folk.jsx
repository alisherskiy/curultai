import React from 'react'
import {Link} from 'react-router-dom'

import './folk.css'

const Folk = () => {
    return (
     <>
     <div class="html">
       <div class="body">
        <main class="building">
            <section class="room">
                <div class="room-walls"></div>
                <p  class="room-content"> Асанбай центр</p>
                
            </section>
            <section class="room">
                <div class="room-walls"></div>
                <p class="room-content"> Токомбаева 21а/4</p>
            
            </section>
        
        </main>
        <div className="text">
            <Link  to='/bilet'><button className='btn1'>Купить билет</button></Link>
<h5 className='hhh'>
                Новый проект направлен на ознакомление, популяризацию фольклорного жанра различных этносов в исполнении талантливых артистов.
Curltai Folks, это актуальное привлечение и повышение внимания к богатому ресурсу творческого наследия кыргызского народа
                </h5>
<p className='hhh'>Впервые в Кыргызстане! Свободный чемпионат по Айтыш!
19 декабря с 09:00 до 16:00 в Асанбай центре (г. Бишкек) пройдет первый свободный чемпионат по Айтыш, организованный в рамках нового проекта Curltai Folk от Curltai.
Задача проекта - сберечь и обновить бесценное наследие предков, используя передовые технологии, и представить это богатство будущим поколениям в современном формате, со всем уважением к традициям.
<li>- призовой фонд - 500 000 сом.</li>
<li>- 150 000 сом и специальный серебряный пояс чемпиона от спонсоров для победителя</li>
<li>- профессиональное жюри</li>
<li>- голосование на Youtube канале Curltai Folk для выбора “народного” Акына</li>
<li>- музыкальное сопровождение чемпионата от фольклорно-этнографического театра "Ордо Сахна"</li>
Особенностью чемпионата станет online трансляция, сопровождаемая съемкой 360 градусов!
</p>
<h3 className='hhh'>ТАКОЕ НЕЛЬЗЬЯ ПРОПУСТИТЬ!</h3>

            </div>
    </div>
    {/* <div className='bilet'>
           <h2 className='ticket'>Приобретайте билеты здесь</h2>
           <h5 className='ticket2'>Vip zone-800 сом</h5>
           <h4 className='ticket3'>Fun zone-500 сом</h4>
           <div className='bank'>
    <form method='POST' action='https://i.ibb.co/JmpW8Jh/1.jpg' >
  Введите сумму оплаты: 
    <input className='sum' type='text' name='sum' /> <br />
  Введите количество билетов: 
    <input className='orderid' type='number' name='orderid' /> <br />
  <input className='oplatit' type='submit' value='Перейти к оплате' />
</form>
      </div>
    </div> */}
</div>
     </>
    )
}

export default Folk
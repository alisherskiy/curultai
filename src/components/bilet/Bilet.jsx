import React from 'react'
 import './bilet.css'
const Bilet = () => {
    return (
           <div className='bilet'>
           <h2 className='ticket'>Приобретайте билеты здесь</h2>
           <h5 className='ticket2'>Vip zone-800 сом</h5>
           <h4 className='ticket2'>Fun zone-500 сом</h4>
           <div className='bank'>
    <form method='POST' action='https://demo.paykeeper.ru/create/' >
  Введите сумму оплаты: 
    <input className='sum' type='text' name='sum' /> <br />
  Введите количество билетов: 
    <input className='sum' type='number' name='orderid' /> <br />
  <input className='knopka' type='submit' value='Перейти к оплате' />
</form>
      </div>


    </div>
    )
}

export default Bilet

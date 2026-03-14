import React from 'react'
import './Ourfirm.css'

function Ourfirm() {
  return (
    <div className='wholepage'>
        <div className='inbox'>
          <section className='intxt'>
          <h3>Our firms</h3>
          <p>Our firm operates across multiple countries, with a strong global presence and a commitment to excellence in every market we serve. We have offices and partners in key financial hubs around the world, allowing us to deliver innovative solutions and personalized services to our clients</p>
          </section>

          <section className='countriespics'>

            <img src='/public/america.jpg' className='usa'/>
            <img src='/public/burj_khalifa_dubai.jpg' className='burj'/>
            <img src='/public/russia-country-st-basils-red-square-moscow.jpg' className='ru'/>



          </section>
          <section className='counrtxt'>
            <p>USA OFFICE</p>
            <p>DUBAI OFFICE</p>
            <p>RUSSIA OFFICE</p>


          </section>

        </div>
      
    </div>
  )
}

export default Ourfirm

import React from 'react'
import './Hero1.css'
import hero2 from '../../assets/Hero2.png'

const Hero1 = () => {
  return (
    <div className='hero1-container'>
      
      <img src={hero2} alt="" className='hero-img' />
      <div className="gradient-color">
        <div className="text-container">
          <h1>Make Your Dream House</h1>
        </div>

        <div className="sale-container">
          <h1>Sale%</h1>
        </div>
        
      </div>
      
    </div>
  )
}

export default Hero1
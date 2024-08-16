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

      <div className="three-box">
        <div className='boxDesign1'><h1>G</h1></div>
        <div className='boxDesign2'><h1>R</h1></div>
        <div className='boxDesign3'><h1>A</h1></div>
        <div className='boxDesign4'><h1>B</h1></div>
      </div>
      
    </div>
  )
}

export default Hero1
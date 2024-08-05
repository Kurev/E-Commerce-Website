import React from 'react'
import './Hero.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Discover Our New <h3 className='fur'>Fur</h3> <h2 className='nature'>nature</h2></h1>
        <p>Transform your home into a tranquil oasis with designs inspired by the beauty of the natural world. Discover the perfect blend of comfort and elegance that brings you closer to nature, right in your own space.</p>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}

          whileTap={{ 
            scale: 1,
            color: 'white'
          }}
        
        >Show <h3 className='arrow-size'><FaLongArrowAltRight  className='arrow'/> </h3></motion.button>
      </div>
      
       
    </div>
  )
}

export default Hero
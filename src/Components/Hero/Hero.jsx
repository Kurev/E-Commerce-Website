import React from 'react'
import './Hero.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}

          >Discover Our New <h3 className='fur'>Fur</h3> <h2 className='nature'>nature</h2>
        </motion.h1>
        <motion.p
          variants={fadeIn("left", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}

          >Transform your home into a tranquil oasis with designs inspired by the beauty of the natural world. Discover the perfect blend of comfort and elegance that brings you closer to nature, right in your own space.
        </motion.p>
        <motion.button
          variants={fadeIn("right", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}

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
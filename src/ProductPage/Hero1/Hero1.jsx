import React from 'react'
import './Hero1.css'
import hero2 from '../../assets/Hero2.png'
import { fadeIn } from '../../animations/FadeIn';
import { motion } from 'framer-motion';

const Hero1 = () => {
  return (
    <div className='hero1-container'>
      
      <img src={hero2} alt="" className='hero-img' />
      <div className="gradient-color">
        <div className="text-container">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            >
              Make Your Dream House
          </motion.h1>
        </div>

        <motion.div 
          variants={fadeIn("left", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}

          className="sale-container">
            <h1>Sale%</h1>
        </motion.div>
      </div>

      <div className="three-box">
        <motion.div 
          variants={fadeIn("left", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='boxDesign1'>
            <h1>G</h1>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='boxDesign2'>
            <h1>R</h1>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='boxDesign3'>
          <h1>A</h1>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: window.innerWidth < 380 ? 0.2 : 0.7}}
          className='boxDesign4'>
          <h1>B</h1>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Hero1
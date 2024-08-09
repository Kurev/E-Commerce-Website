import React from 'react'
import './Title.css'
import { fadeIn } from '../../animations/FadeIn'
import { motion } from 'framer-motion'

const Title = ({ title, subTitle }) => {
  return (
    <div className="title-container">
        <div className='title'>
          <motion.h2
            variants={fadeIn("right", 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
              >{title}
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
          
            >{subTitle}
          </motion.p>
      </div>
    </div>
    
  )
}

export default Title
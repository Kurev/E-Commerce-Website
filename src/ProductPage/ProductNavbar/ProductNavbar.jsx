import React from 'react'
import './ProductNavbar.css'
import { fadeIn } from '../../animations/FadeIn';
import { motion } from 'framer-motion';

const ProductNavbar = () => {
  return (
    <motion.div 
        variants={fadeIn("up", 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='Product-Navbar'>
          <h1>Category</h1>
          <ul>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Cabinets</li>
              <li>Beds</li>
          </ul>
    </motion.div>
  )
}

export default ProductNavbar
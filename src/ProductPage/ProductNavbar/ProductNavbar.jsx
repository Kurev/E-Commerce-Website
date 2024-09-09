import React from 'react';
import './ProductNavbar.css';
import { fadeIn } from '../../animations/FadeIn';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll

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
              <li>
                <ScrollLink
                  to='tables-section' // This ID should match the target element in ProductBody
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Tables
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to='chairs-section'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Chairs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to='cabinets-section'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Cabinets
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to='beds-section'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Beds
                </ScrollLink>
              </li>
          </ul>
    </motion.div>
  )
}

export default ProductNavbar;

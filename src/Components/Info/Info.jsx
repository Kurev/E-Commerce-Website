import React from 'react'
import './Info.css'
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursFill } from "react-icons/ri";
import { IoShieldHalf } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from '../../animations/FadeIn';




const Info = () => {
  return (
    <div className='services-container'>
        <motion.div 
            variants={fadeIn("down", 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            
            className="services1">
                <motion.h1
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    whileTap={{ scale: 0.8, rotate: 0}}
                ><TbTruckDelivery />
                </motion.h1>
                <div className="detail1">
                    <h3>Free Delivery</h3>
                    <p>Enjoy free delivery on all orders.</p>
                </div>  
        </motion.div>
        <motion.div 
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}

            className="services2">
                <motion.h1
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    whileTap={{ scale: 0.8, rotate: 0}}
                ><Ri24HoursFill />
                </motion.h1>
                <div className="detail1">
                    <h3>Support 24/7</h3>
                    <p>Enjoy free delivery on all orders.</p>
                </div>

        </motion.div>
        <motion.div 
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            
            className="services3">
                <motion.h1
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    whileTap={{ scale: 0.8, rotate: 0}}
                ><IoShieldHalf />
                </motion.h1>
                <div className="detail1">
                    <h3>100% Authentic</h3>
                    <p>Enjoy free delivery on all orders.</p>
                </div>

        </motion.div>

    </div>
  )
}

export default Info
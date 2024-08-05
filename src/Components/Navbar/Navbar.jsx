import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence} from 'framer-motion'
import { easeIn } from 'framer-motion/dom'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
        <a href="" className='logo'>FurniShop</a>
        <ul>
          <AnimatePresence> 
            <motion.li
              whileHover={{
               scale: 1.1,
               opacity: 1,
               transition: {
                duration: 0.3,
                ease: 'linear'
              }
              }}

              exit={{
                transition: {
                  duration: 4,
                  ease: 'easeInOut'
                }
              }}

            >Home
            </motion.li>
          </AnimatePresence>

          <AnimatePresence> 
            <motion.li
              whileHover={{
               scale: 1.1,
               opacity: 1,
               transition: {
                duration: 0.3,
                ease: 'linear'
              }
              }}

              exit={{
                transition: {
                  duration: 4,
                  ease: 'easeInOut'
                }
              }}

            >Product
            </motion.li>
          </AnimatePresence>

          <AnimatePresence> 
            <motion.li
              whileHover={{
               scale: 1.1,
               opacity: 1,
               transition: {
                duration: 0.3,
                ease: 'linear'
              }
              }}

              exit={{
                transition: {
                  duration: 4,
                  ease: 'linear'
                }
              }}

            >Favorites
            </motion.li>
          </AnimatePresence>

          <AnimatePresence> 
            <motion.li
              whileHover={{
               scale: 1.1,
               opacity: 1,
               transition: {
                duration: 0.3,
                ease: 'linear'
              }
              }}

              exit={{
                transition: {
                  duration: 4,
                  ease: 'easeInOut'
                }
              }}

            >Contact
            </motion.li>
          </AnimatePresence>
          
        </ul>
    </nav>
  )
}

export default Navbar
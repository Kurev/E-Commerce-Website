import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence} from 'framer-motion'
import { easeIn } from 'framer-motion/dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
        <a href="" className='logo'>FurniShop</a>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
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
        <GiHamburgerMenu className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
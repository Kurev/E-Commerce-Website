import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom'; // For page navigation
import { Link as ScrollLink } from 'react-scroll'; // For smooth scroll within the page

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate(); // useNavigate to programmatically navigate between routes

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  // Function to handle navigation to home and scroll to hero if already on home
  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      // If already on the homepage, scroll to the top or hero section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to the homepage
      navigate('/');
    }
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      {/* Logo link - navigate to home page */}
      <div  onClick={handleHomeClick}>
        <h1 className='logo'>FurniShop</h1>
      </div>

      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <AnimatePresence>
          {/* Home Link - handle scrolling or navigating to home page */}
          <motion.li
            whileHover={{
              scale: 1.1,
              opacity: 1,
              color: 'white',
              transition: {
                duration: 0.3,
                ease: 'linear',
              },
            }}
            exit={{
              transition: {
                duration: 4,
                ease: 'easeInOut',
              },
            }}
            key='home'
            onClick={handleHomeClick} // Handle click to home
          >
            Home
          </motion.li>

          {/* Product Page Link - full page navigation */}
          <Link to='/ProductPage' className='link' key='product'>
            <motion.li
              whileHover={{
                scale: 1.1,
                opacity: 1,
                color: 'white',
                transition: {
                  duration: 0.3,
                  ease: 'linear',
                },
              }}
              exit={{
                transition: {
                  duration: 4,
                  ease: 'easeInOut',
                },
              }}
            >
              Product
            </motion.li>
          </Link>

          {/* Favorites Page Link - full page navigation */}
          <Link to='/FavoritePage' className='link' key='favorites'>
            <motion.li
              whileHover={{
                scale: 1.1,
                opacity: 1,
                color: 'white',
                transition: {
                  duration: 0.3,
                  ease: 'linear',
                },
              }}
              exit={{
                transition: {
                  duration: 4,
                  ease: 'linear',
                },
              }}
            >
              Favorites
            </motion.li>
          </Link>

          {/* Smooth scrolling to the Contact section (only works if you're on the same page) */}
          <motion.li
            whileHover={{
              scale: 1.1,
              opacity: 1,
              color: 'white',
              transition: {
                duration: 0.3,
                ease: 'linear',
              },
            }}
            exit={{
              transition: {
                duration: 4,
                ease: 'easeInOut',
              },
            }}
            key='contact'
          >
            {/* Scroll to the contact section only if you're on the homepage */}
            <ScrollLink
              to='contact' // This should match the ID of your contact section
              spy={true}
              smooth={true}
              offset={window.innerWidth < 480 ? -170 : -60} // Adjust this offset depending on the height of your navbar
              duration={500}
              className='fix-con'
              onClick={() => {
                if (window.location.pathname !== '/') {
                  // Navigate to home if on a different page, then scroll
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 1000); // Small delay for the page to load
                }
              }}
            >
              Contact
            </ScrollLink>
          </motion.li>
        </AnimatePresence>
      </ul>
      <GiHamburgerMenu className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

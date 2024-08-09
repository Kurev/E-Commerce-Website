import React from 'react';
import { motion } from 'framer-motion';
import './Collection.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/hero.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

const Collection = () => {
  const images = [img1, img2, img3, img4, img5];

  const variants = {
    animate: {
      x: [0, -1000], // Adjust this value based on the total width of your images
      transition: {
        x: {
          repeat: Infinity,
          duration: 20, // Adjust to control the speed of the scroll
          ease: "linear"
        }
      }
    }
  };
  
  return (
    <div className='collection-container'>
      <motion.div className='collection' variants={variants} animate="animate">
        {images.concat(images).concat(images).concat(images).map((img, index) => ( // Concatenate images for infinite effect
          <img key={index} src={img} alt="" className='all-image' />
        ))}
      </motion.div>
    </div>
  );
};

export default Collection;

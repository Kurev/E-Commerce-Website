import React, { useState } from 'react';
import './Details.css';
import detail from '../../assets/detail.png';
import { AnimatePresence, motion } from 'framer-motion';import { FaHammer } from "react-icons/fa";



const Details = () => {
  const [showCaption, setShowCaption] = useState(false);

  return (
    <div className='detail-container'>
      <div className="boxWithImage">
        <div className="box"></div>

        <motion.img 
          whileHover={{
            x: -4,
            y: -10,
            scale: 1.1,
            boxShadow: '8px 8px 5px 0px rgba(5,255,93,0.74)'
          }}
          onHoverStart={() => setShowCaption(true)}
          onHoverEnd={() => setShowCaption(false)}
          src={detail} 
          alt="" 
          className='details-img' 
        />
            {showCaption && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1,
                    x: -4,
                    y: -10,
                    scale: 1.1
                }}
                exit={{ 
                    opacity: 0
                }}
                className="overlay-details">
                <div className="caption">
                    <h2 className="overlay-text">Small Dinning Table</h2>
                    <AnimatePresence>
                        
                    </AnimatePresence>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1
                            }}
                            exit={{ 
                                opacity: 0
                            }}
                            transition={{duration: 0.5}}
                        className="details">
                            <p>Durable, versatile table perfect for enhancing any kitchen or dining area with convenience and style.</p>
                            <p className='price'>₱4,500</p>
                            <button>Visit</button>
                        </motion.div>
                </div>
            </motion.div>
            )}
        
      </div>

      <div className="context-container">
        <h1>Artistry<FaHammer className='hammer'/></h1>
        <p><h4>Designing:</h4> Conceptualizing the piece with sketches and detailed plans.</p>
        <p><h4>Selecting Materials:</h4> Choosing high-quality materials for durability and aesthetics.</p>
        <p><h4>Shaping:</h4> Cutting and shaping materials to the desired form.</p>
        <p><h4>Assembling:</h4> Combining pieces meticulously to create the final structure.</p>
        <p><h4>Finishing:</h4> Polishing and refining for a flawless and attractive finish.</p>
      </div>
    </div>
  );
}

export default Details;
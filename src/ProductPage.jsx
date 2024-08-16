import React from 'react'
import './ProductPage.css'
import Navbar from './Components/Navbar/Navbar'
import Hero1 from './ProductPage/Hero1/Hero1'

const ProductPage = () => {
  return (
    <div className='ProductPage-Container'>
        <Navbar />
        <div className="PaddingAllProductPage">
          <Hero1 />
        </div>
        
    </div>
  )
}

export default ProductPage
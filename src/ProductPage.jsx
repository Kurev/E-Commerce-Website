import React from 'react'
import './ProductPage.css'
import Navbar from './Components/Navbar/Navbar'
import Hero1 from './ProductPage/Hero1/Hero1'
import ProductNavbar from './ProductPage/ProductNavbar/ProductNavbar'

const ProductPage = () => {
  return (
    <div className='ProductPage-Container'>
        <Navbar />
        <div className="PaddingAllProductPage">
          <Hero1 />
          <ProductNavbar />
        </div>
        
    </div>
  )
}

export default ProductPage
import React from 'react'
import './ProductPage.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero1 from './ProductPage/Hero1/Hero1'
import ProductNavbar from './ProductPage/ProductNavbar/ProductNavbar'
import ProductBody from './ProductPage/ProductBody/ProductBody'

const ProductPage = () => {
  return (
    <div className='ProductPage-Container'>
        <Navbar />
        
        <div className="PaddingAllProductPage">
          <Hero1 />
          <ProductNavbar />
          <ProductBody /> 
        </div>
        <Footer />
    </div>
  )
}

export default ProductPage
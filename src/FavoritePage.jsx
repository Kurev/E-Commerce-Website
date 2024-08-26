import React from 'react'
import './FavoritePage.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import FavoriteContainer from './FavoritePage/FavoriteContainer/FavoriteContainer'

const FavoritePage = () => {
  return (
    <div>
        <Navbar />
        <div className="PaddingFavorite">
          <FavoriteContainer />
        </div>
        
    </div>
  )
}

export default FavoritePage
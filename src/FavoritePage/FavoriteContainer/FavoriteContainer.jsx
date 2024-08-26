import React, { useEffect, useState } from 'react';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import './FavoriteContainer.css';

const FavoriteContainer = () => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (Array.isArray(savedCart)) {
            setCart(savedCart);
        } else {
            console.error('Cart data is not an array');
            setCart([]);
        }

        if (Array.isArray(savedFavorites)) {
            setFavorites(savedFavorites);
        } else {
            console.error('Favorites data is not an array');
            setFavorites([]);
        }
    }, []);

    const removeFromCart = (index, product) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);

        const newFavorites = favorites.map((isFavorite, i) => {
            if (product.image === cart[i]?.image) return false;
            return isFavorite;
        });
        setFavorites(newFavorites);

        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    return (
        <div className='fovoriteCart'>
            <h1 className='FavoriteTitle'>Your Cart</h1>
            <ul className='mainContainerCard'>
                {cart.length > 0 ? (
                    cart.map((product, index) => (
                        <li key={index}>
                            <div className='card-container'>
                                <div className="imageTable">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="tableTitle">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="priceAndIcon">
                                    <p>{product.discounted}</p>
                                </div>
                                <div className="discountedPrice">
                                    <del>{product.price}</del>
                                    <p className='percentage'>-{product.discPercentage}</p>
                                </div>
                                <button
                                    className='delete-button'
                                    onClick={() => removeFromCart(index, product)}
                                >
                                    <FaTrashAlt /> Remove
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )}
            </ul>
        </div>
    );
};

export default FavoriteContainer;

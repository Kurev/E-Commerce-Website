import React, { useState } from 'react';
import './ProductBody.css';
import table1 from '../../assets/tables1.png';
import table2 from '../../assets/Table2.png';
import table3 from '../../assets/table3.png';
import table4 from '../../assets/table4.png';
import table5 from '../../assets/table5.png';
import table6 from '../../assets/table6.png';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductBody = () => {
    // Initialize state with each product's favorite status
    const [favorites, setFavorites] = useState(
        Array(6).fill(false)
    );

    // Toggle favorite status
    const toggleFavorite = (index) => {
        setFavorites(prevFavorites =>
            prevFavorites.map((isFavorite, i) =>
                i === index ? !isFavorite : isFavorite
            )
        );
    };

    const TableImages = [
        {
            image: table1,
            title: 'Elegance in Every Corner: Premium Tables Collection',
            price: '₱ 12,403',
            discPercentage: '15%',
            discounted: '₱ 10,542.55'
        },
        {
            image: table2,
            title: 'Crafted Perfection: Signature Tables for Every Space',
            price: '₱ 15,200',
            discPercentage: '20%',
            discounted: '₱ 12,160.00'
        },
        {
            image: table3,
            title: 'Timeless Tables: Where Style Meets Functionality',
            price: '₱ 9,999',
            discPercentage: '12%',
            discounted: '₱ 8,799.12'
        },
        {
            image: table4,
            title: 'Designer Tables: Elevate Your Living Space',
            price: '₱ 18,750',
            discPercentage: '25%',
            discounted: '₱ 14,062.50'
        },
        {
            image: table5,
            title: 'Modern Masterpieces: Exclusive Table Designs',
            price: '₱ 20,500',
            discPercentage: '18%',
            discounted: '₱ 16,810.00'
        },
        {
            image: table6,
            title: 'Artful Living: Tables that Transform Your Home',
            price: '₱ 11,400',
            discPercentage: '10%',
            discounted: '₱ 10,260.00'
        }
    ];

    return (
        <div>
            <h1 className='TableTitle'>Tables</h1>
            <ul className='mainContainerCard'>
                {TableImages.map((product, index) => (
                    <li key={index}>
                        <div className='card-container'>
                            <div className="imageTable">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="tableTitle">
                                <h3>{product.title}</h3>
                            </div>
                            <div className="priceAndIcon">
                                <p>{product.price}</p>
                                <p
                                    className='heart-icon'
                                    onClick={() => toggleFavorite(index)}
                                >
                                    {favorites[index] ? <FaHeart /> : <FaRegHeart />}
                                </p>
                            </div>
                            <div className="discountedPrice">
                                <del>{product.discounted}</del>
                                <p className='percentage'>-{product.discPercentage}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductBody;
    
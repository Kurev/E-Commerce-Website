import React, { useState } from 'react';
import './ProductBody.css';
import table1 from '../../assets/tables1.png';
import table2 from '../../assets/Table2.png';
import table3 from '../../assets/table3.png';
import table4 from '../../assets/table4.png';
import table5 from '../../assets/table5.png';
import table6 from '../../assets/table6.png';
import chair1 from '../../assets/chair1.png';
import chair2 from '../../assets/chair2.png';
import chair3 from '../../assets/chair3.png';
import chair4 from '../../assets/chair4.png';
import chair5 from '../../assets/chair5.png';
import chair6 from '../../assets/chair6.png';
import cabinet1 from '../../assets/cabinet1.png';
import cabinet2 from '../../assets/cabinet2.png';
import cabinet3 from '../../assets/cabinet3.png';
import cabinet4 from '../../assets/cabinet4.png';
import cabinet5 from '../../assets/cabinet5.png';
import cabinet6 from '../../assets/cabinet6.png';
import bed1 from '../../assets/bed1.png';
import bed2 from '../../assets/bed2.png';
import bed3 from '../../assets/bed3.png';
import bed4 from '../../assets/bed4.png';
import bed5 from '../../assets/bed5.png';
import bed6 from '../../assets/bed6.png';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductBody = () => {
    // Initialize state with each product's favorite status
    const [favorites, setFavorites] = useState(
        Array(24).fill(false)
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

    

    const ChairImages = [
        {
            image: chair1,
            title: 'Ergonomic Office Chair with Lumbar Support',
            price: '₱ 12,403',
            discPercentage: '15%',
            discounted: '₱ 10,542.55'
        },
        {
            image: chair2,
            title: 'Modern Swivel Chair with Adjustable Height',
            price: '₱ 15,200',
            discPercentage: '20%',
            discounted: '₱ 12,160.00'
        },
        {
            image: chair3,
            title: 'Premium Leather Reclining Desk Chair',
            price: '₱ 9,999',
            discPercentage: '12%',
            discounted: '₱ 8,799.12'
        },
        {
            image: chair4,
            title: 'Comfortable Mesh Chair for Home Office',
            price: '₱ 18,750',
            discPercentage: '25%',
            discounted: '₱ 14,062.50'
        },
        {
            image: chair5,
            title: 'Stylish Dining Chair Set with Padded Seats',
            price: '₱ 20,500',
            discPercentage: '18%',
            discounted: '₱ 16,810.00'
        },
        {
            image: chair6,
            title: 'Luxury Executive Chair with Tilt Mechanism',
            price: '₱ 11,400',
            discPercentage: '10%',
            discounted: '₱ 10,260.00'
        }
    ];

    const CabinetImages = [
        {
            image: cabinet1, // Update with actual cabinet image path
            title: 'Sleek and Modern: Premium Cabinet Collection',
            price: '₱ 55,000',
            discPercentage: '15%',
            discounted: '₱ 46,750'
        },
        {
            image: cabinet2,
            title: 'Elegant Storage: Signature Cabinets for Every Room',
            price: '₱ 60,000',
            discPercentage: '20%',
            discounted: '₱ 48,000'
        },
        {
            image: cabinet3,
            title: 'Classic Cabinets: Where Style Meets Utility',
            price: '₱ 50,000',
            discPercentage: '10%',
            discounted: '₱ 45,000'
        },
        {
            image: cabinet4,
            title: 'Designer Cabinets: Transform Your Space',
            price: '₱ 65,000',
            discPercentage: '25%',
            discounted: '₱ 48,750'
        },
        {
            image: cabinet5,
            title: 'Modern Elegance: Exclusive Cabinet Designs',
            price: '₱ 70,000',
            discPercentage: '18%',
            discounted: '₱ 57,400'
        },
        {
            image: cabinet6,
            title: 'Artful Cabinets: Enhance Your Home Décor',
            price: '₱ 75,000',
            discPercentage: '12%',
            discounted: '₱ 66,000'
        }
    ];

    const BedImages = [
        {
            image: bed1, 
            title: 'Luxury Comfort: Premium Bed Collection',
            price: '₱ 65,000',
            discPercentage: '10%',
            discounted: '₱ 58,500'
        },
        {
            image: bed2, 
            title: 'Elegant Design: Signature Beds for Any Room',
            price: '₱ 80,000',
            discPercentage: '15%',
            discounted: '₱ 68,000'
        },
        {
            image: bed3,
            title: 'Modern Style: Beds with Contemporary Flair',
            price: '₱ 90,000',
            discPercentage: '12%',
            discounted: '₱ 79,200'
        },
        {
            image: bed4, 
            title: 'Classic Comfort: Timeless Bed Designs',
            price: '₱ 100,000',
            discPercentage: '20%',
            discounted: '₱ 80,000'
        },
        {
            image: bed5,
            title: 'Designer Beds: Stylish and Functional',
            price: '₱ 120,000',
            discPercentage: '18%',
            discounted: '₱ 98,400'
        },
        {
            image: bed6,
            title: 'Opulent Living: High-End Bed Collection',
            price: '₱ 150,000',
            discPercentage: '15%',
            discounted: '₱ 127,500'
        }
    ];
    


    const ProductList = (products, startIndex) => (
        <ul className='mainContainerCard'>
            {products.map((product, index) => (
                <li key={index}>
                    <div className='card-container'>
                        <div className="imageTable">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="tableTitle">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="priceAndIcon">
                            <p>{product.discounted}</p>
                            <p
                                className='heart-icon'
                                onClick={() => toggleFavorite(startIndex + index)}
                            >
                                {favorites[startIndex + index] ? <FaHeart /> : <FaRegHeart />}
                            </p>
                        </div>
                        <div className="discountedPrice">
                            <del>{product.price}</del>
                            <p className='percentage'>-{product.discPercentage}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );



    return (
        <div>
           <h1 className='TableTitle'>Tables</h1>
            {ProductList(TableImages, 0)}

            <h1 className='TableTitle'>Chairs</h1>
            {ProductList(ChairImages, TableImages.length)}

            <h1 className='TableTitle'>Cabinets</h1>
            {ProductList(CabinetImages, TableImages.length + ChairImages.length)}

            <h1 className='TableTitle'>Beds</h1>
            {ProductList(BedImages, TableImages.length + ChairImages.length + CabinetImages.length)}

        </div>
    );
}

export default ProductBody;
    
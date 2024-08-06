import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="first-container">
            <div className='Title-footer'>
                <h1>FurniShop</h1>
                <p>Boost your business growth with FurniShop, your ultimate ecommerce partner.</p>
            </div>
            <div className='SubTitle-footer'>
                <div className="list1">
                    <ul>
                        <h4>Company</h4>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="list2">
                <ul>
                        <h4>Resources</h4>
                        <li>Documentation</li>
                        <li>Papers</li>
                        <li>Press Conferences</li>
                    </ul>
                </div>
                <div className="list3">
                <ul>
                        <h4>Legal</h4>
                        <li>Term of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                        <li>Data Processing</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="second-container">
            <div className="copy-rights">
                <p>© 2024 Copyright: FurniShop.vercel.app</p>
            </div>
            <div className="icons">
                <FaFacebookSquare className='icon'/>
                <AiFillTikTok className='icon' />
                <FaSquareInstagram className='icon' />
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
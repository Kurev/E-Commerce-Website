import React from 'react';
import './Contact.css';
import contact from '../../assets/contact.png'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";

const Contact = ({ title, subTitle}) => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "696bc2f3-1bcd-46f6-a00c-e4e6c6a860be");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="cont-container">
                <div className="title">
                    <h1>{title}</h1>
                    <p className='sub-text'>{subTitle}</p>
                </div>

                <div className="contact-image">
                    <img src={contact} alt="" className='con-image'/>
                    <div className="social-conatct">
                        <p><MdEmail className='cont-icon'/>Kurtmontes154@gmail.com</p>
                        <p><BsFillTelephoneFill className='cont-icon'/>+1 123-534-6452</p>
                        <p><FaMobile className='cont-icon'/>09342057321</p>
                        <p className='cont-info'>We are dedicated to offering full assistance and support to address any inquiries or concerns you may have about our FurniShop.</p>
                    </div>
                    
                </div>
                
            </div>
            
            
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Full Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />

                    <label>Email Address</label>
                    <input type="email" name='email' placeholder='Enter your email' required />

                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />

                    <label>Type of Furniture</label>
                    <input type="text" name='furniture' placeholder='Input your furniture' required />

                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;

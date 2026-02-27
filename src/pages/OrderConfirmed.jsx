import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import orderConfirmed from '../assets/order_confirmed.svg'
import './OrderConfirmed.css'
import { useNavigate } from 'react-router-dom';

const OrderConfirmed = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
    }
    return (
        <div>
            {/* -----------------------------------Navbar Part Start------------------------------------------- */}
            <NavBar />
            {/* -----------------------------------Navbar Part End------------------------------------------- */}
            {/* -----------------------------------404 Main Mid Section Start------------------------------------------- */}
            <div className='order-confirmed-main-container'>

                <div className='order-confirmed-image-wrapper'>
                    <img src={orderConfirmed} alt="Order Confirmed" className='order-confirmed-image' />
                    <button className='order-confirmed-home-btn' onClick={goToHomePage}>Continue Shopping</button>
                </div>



            </div>



            {/* -----------------------------------404 Main Mid Section End------------------------------------------- */}
            {/* ----------------------------------------Footer Section Start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section End------------------------------------------ */}
        </div>
    )
}

export default OrderConfirmed
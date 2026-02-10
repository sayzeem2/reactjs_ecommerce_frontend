import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import emptyCart from '../assets/CartEmptyGreen.svg'
import './EmptyCart.css'
import { useNavigate } from 'react-router-dom';
const EmptyCart = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
    }
    return (
        <div>
            {/* -----------------------------------Navbar Part Start------------------------------------------- */}
            {/* <NavBar /> */}
            {/* -----------------------------------Navbar Part End------------------------------------------- */}
            {/* -----------------------------------404 Main Mid Section Start------------------------------------------- */}
            <div className='empty-cart-main-container'>

                <div className='empty-cart-image-wrapper'>
                    <img src={emptyCart} alt="Cart Empty" />
                </div>

                <div className='empty-cart-text-container'>
                    <span className='empty-cart-text-header'>Your Cart is Empty and Sad :(</span>
                    <span className='empty-cart-text-info'>Add something to make it happy!</span>
                </div>

                <div className='empty-cart-home-btn-container'>
                    <button className='empty-cart-home-btn' onClick={goToHomePage}>Continue Shopping</button>
                </div>


            </div>



            {/* -----------------------------------404 Main Mid Section End------------------------------------------- */}
            {/* ----------------------------------------Footer Section Start------------------------------------------ */}
            {/* <Footer /> */}
            {/* ----------------------------------------Footer Section End------------------------------------------ */}
        </div>
    )
}

export default EmptyCart
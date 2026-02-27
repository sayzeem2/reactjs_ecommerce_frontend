import React from 'react'
import emptyWishlist from '../assets/EmptyWishlist.svg'
import './EmptyWishlistPage.css'
import { useNavigate } from 'react-router-dom';
const EmptyWishlistPage = () => {
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
            <div className='empty-wishlist-main-container'>

                <div className='empty-wishlist-image-wrapper'>
                    <img src={emptyWishlist} alt="Wishlist Empty" />
                </div>

                <div className='empty-wishlist-text-container'>
                    <span className='empty-wishlist-text-header'>Your wishlist is empty.</span>
                    <span className='empty-wishlist-text-info'>You don't have any products in the wishlist yet,</span>
                    <span className='empty-wishlist-text-info'>you will find a lot of interesting products on our Shop page</span>
                </div>

                <div className='empty-wishlist-home-btn-container'>
                    <button className='empty-wishlist-home-btn' onClick={goToHomePage}>Continue Shopping</button>
                </div>


            </div>



            {/* -----------------------------------404 Main Mid Section End------------------------------------------- */}
            {/* ----------------------------------------Footer Section Start------------------------------------------ */}
            {/* <Footer /> */}
            {/* ----------------------------------------Footer Section End------------------------------------------ */}
        </div>
    )
}

export default EmptyWishlistPage
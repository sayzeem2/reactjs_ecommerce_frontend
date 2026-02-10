import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Image404 from '../assets/404Green.svg'
import './Error404Page.css'
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
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
            <div className='error-404-main-container'>

                <div className='error-404-image-wrapper'>
                    <img src={Image404} alt="404 Error" />
                </div>

                <div className='error-404-text-container'>
                    <span className='error-404-text-header'>Oops! Page Not Found</span>
                    <span className='error-404-text-info'>The Page you are looking for might have been removed or temporarily unavailable</span>
                </div>

                <div className='error-404-home-btn-container'>
                    <button className='error-404-home-btn' onClick={goToHomePage}>Back To HomePage</button>
                </div>


            </div>



            {/* -----------------------------------404 Main Mid Section End------------------------------------------- */}
            {/* ----------------------------------------Footer Section Start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section End------------------------------------------ */}
        </div>
    )
}

export default Error404Page
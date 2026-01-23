import React from 'react'
import "./ContactUs.css"
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
function ContactUs() {

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
    }
    const goToAboutUsPage = () => {
        navigate("/about-us")
    }
    const goToContactUsPage = () => {
        navigate("/contact-us")
    }
    const goToTermsConditionsPage = () => {
        navigate("/terms-conditions")
    }
    const goToShippingPolicyPage = () => {
        navigate("/shipping-policy")
    }
    const socialmedialogos = [
        {
            id: 1,
            altname: "facebook",
            image: facebookLogo,
        },
        {
            id: 2,
            altname: "instagram",
            image: instaLogo,
        },
        {
            id: 3,
            altname: "twitter",
            image: twitterLogo,
        },
        {
            id: 4,
            altname: "linkedin",
            image: linkedinLogo,
        },
    ];
    return (
        <div>
            {/* -----------------------------------navbar part start------------------------------------------- */}
            <nav className="contactus-nav-container">
                <div className="contactus-nav-element-container">
                    <div className='contactus-nav-element-left'>
                        <div className='contactus-nav-logo' onClick={goToHomePage}></div>
                        <div className='contactus-nav-categories-container'>
                            <a href="" className="contactus-nav-categories-shop">Shop</a>
                            <a href="" className='contactus-nav-categories-men'>Men</a>
                            <a href="" className='contactus-nav-categories-women'>Women</a>
                            <a href="" className='contactus-nav-categories-combos'>Combos</a>
                            <a href="" className='contactus-nav-categories-joggers'>Joggers</a>
                        </div>
                    </div>
                    <div className='contactus-nav-search-container'>
                        <a href="#" className='contactus-nav-search-img'></a>
                        <input type="text" className='contactus-nav-search-input' placeholder='Search' />
                    </div>
                    <div className='contactus-nav-element-right'>
                        <div className='contactus-nav-icons-container'>
                            <div className='contactus-nav-wishlist-icon'></div>
                            <div className='contactus-nav-account-icon'></div>
                            <div className='contactus-nav-shoppingCart-icon'></div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------feedback Start--------------------------------------------- */}

            <div className='contactus-mid-main-container'>
                <div className='contactus-mid-heading-container'>
                    <h1 className='contactus-mid-heading'>CONTACT US</h1>
                </div>
                <div className='contactus-mid-content-container'>
                    <div className='contactus-mid-left-upper-main-container'>
                        <h3 className='contactus-mid-left-upper-heading'>Call To Us</h3>
                        <span className='contactus-mid-left-upper-content'>We are available 24 hours a day, 7 days a week.</span>
                        <span className='contactus-mid-left-upper-contact'>Phone : +91-9876543210</span>
                        <hr className='contactus-mid-left-hr' />
                        <h3 className='contactus-mid-left-lower-heading'>Write To Us</h3>
                        <span className='contactus-mid-left-lower-content'>Fill our form and we will contact you within 24 hours.</span>
                        <span className='contactus-mid-left-lower-contact'>Email : support@TheCornerStore.com</span>
                    </div>


                    <div className='contactus-mid-right-main-container'>
                        <div className='contactus-mid-right-content-container'>
                            <div className='contactus-mid-right-input-container'>
                                <input type="text" placeholder='Your Name *' className='contactus-mid-right-name-input' />
                                <input type="text" placeholder='Your Email *' className='contactus-mid-right-email-input' />
                                <input type="text" placeholder='Your Phone *' className='contactus-mid-right-phone-input' />
                            </div>
                            <div className='contactus-mid-right-textarea-container'>
                                <textarea rows={10} className="contactus-mid-right-feedback-textarea" name="" id="" placeholder='Your Message' />
                            </div>
                            <div className='contactus-mid-right-btn-container'>
                                <button className='contactus-mid-right-btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------feedback End--------------------------------------------- */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>
    )
}

export default ContactUs
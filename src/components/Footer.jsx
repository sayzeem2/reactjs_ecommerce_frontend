import React from 'react'
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate();
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
    return (
        <footer className='footer-main-container'>
            <div className='footer-sections-main-container'>
                <div className='footer-need-help-section-container'>
                    <h3 className='footer-need-help-heading'>Need Help</h3>
                    <a href="" className='footer-need-help-links' onClick={goToContactUsPage}>Contact Us</a>
                    <a href="" className='footer-need-help-links'>Track Order</a>
                    <a href="" className='footer-need-help-links'>Returns & Refunds</a>
                    <a href="" className='footer-need-help-links'>FAQ's</a>
                </div>
                <div className='footer-company-section-container'>
                    <h3 className='footer-company-heading'>Company</h3>
                    <a href="" className='footer-company-links' onClick={goToAboutUsPage}>About Us</a>
                    <a href="" className='footer-company-links'>Blog</a>
                    <a href="" className='footer-company-links' onClick={goToContactUsPage}>Contact Us</a>
                </div>
                <div className='footer-info-section-container'>
                    <h3 className='footer-info-heading'>More Info</h3>
                    <a href="" className='footer-info-links' onClick={goToTermsConditionsPage}>Terms and Conditions</a>
                    <a href="" className='footer-info-links'>Privacy Policy</a>
                    <a href="" className='footer-info-links' onClick={goToShippingPolicyPage}>Shipping Policy</a>
                    {/* <a href="" className='footer-info-links'>Sitemap</a> */}
                </div>
                <div className='footer-location-section-container'>
                    <h3 className='footer-location-heading'>Location</h3>
                    <span className='footer-location-links'>support@TheCornerStore.com</span>
                    <span className='footer-location-links'>Eklingpura Chouraha,Ahmedabad Main Road</span>
                    <span className='footer-location-links'>(NH 8-Near Mahadev Hotel) Udaipur, India-313002</span>
                </div>

            </div>

            <div className='footer-social-media-icons-container'>
                {socialmedialogos.slice(0, 5).map((item) => (
                    <div key={item.id} className='footer-social-media-images-container'>
                        <img src={item.image} alt={item.altname} />
                    </div>
                ))}
            </div>
            <div className='footer-copyright-container'>
                <h4>Copyright @ 2026 The Corner Store Pvt Ltd. All Rights Reserved.</h4>
            </div>
        </footer>
    )
}

export default Footer
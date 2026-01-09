import React from 'react'
import "./AboutUs.css"
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import { useNavigate } from 'react-router-dom'
import { Linkedin, Twitter } from 'lucide-react'
function AboutUs() {
    const teamObj = [{
        id: 1,
        name: "Mark Waugh",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
        altname: "Founder"
    }, {
        id: 2,
        name: "Angelina Waugh",
        image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVtcGxveWVlfGVufDB8fDB8fHww",
        altname: "Director"
    }, {
        id: 3,
        name: "Celina Gomes",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
        altname: "Admin Head"
    },
    ]


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
            <nav className="aboutus-nav-container">
                <div className="aboutus-nav-element-container">
                    <div className='aboutus-nav-element-left'>
                        <div className='aboutus-nav-logo' onClick={goToHomePage}></div>
                        <div className='aboutus-nav-categories-container'>
                            <a href="" className="aboutus-nav-categories-shop">Shop</a>
                            <a href="" className='aboutus-nav-categories-men'>Men</a>
                            <a href="" className='aboutus-nav-categories-women'>Women</a>
                            <a href="" className='aboutus-nav-categories-combos'>Combos</a>
                            <a href="" className='aboutus-nav-categories-joggers'>Joggers</a>
                        </div>
                    </div>
                    <div className='aboutus-nav-search-container'>
                        <a href="#" className='aboutus-nav-search-img'></a>
                        <input type="text" className='aboutus-nav-search-input' placeholder='Search' />
                    </div>
                    <div className='aboutus-nav-element-right'>
                        <div className='aboutus-nav-icons-container'>
                            <div className='aboutus-nav-wishlist-icon'></div>
                            <div className='aboutus-nav-account-icon'></div>
                            <div className='aboutus-nav-shoppingCart-icon'></div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------Our Story Start--------------------------------------------- */}

            <div className='aboutus-story-main-container'>
                <div className='aboutus-story-content-container'>
                    <div className='aboutus-story-left-container'>
                        <h1 className='aboutus-story-heading'>Our Story</h1>

                        <p className='aboutus-story-para'>
                            The Corner Store was born from a simple idea — to bring the warmth, trust, and convenience of a neighborhood store into the digital world.
                        </p>

                        <p className='aboutus-story-para'>
                            Growing up, the local corner store was more than just a place to shop. It was familiar, reliable, and always there when you needed it. Inspired by this timeless experience, we set out to create an e-commerce platform that combines the personal touch of local shopping with the ease and accessibility of modern technology.
                        </p >

                        <p className='aboutus-story-para'>
                            Based in India, The Corner Store is built with a deep understanding of everyday needs, evolving lifestyles, and the value of quality at the right price. We carefully curate products that meet our standards of reliability, usefulness, and value, ensuring that every purchase feels simple, secure, and satisfying.
                        </p>

                        <p className='aboutus-story-para'>
                            Our journey is driven by a commitment to trust, transparency, and customer-first thinking. As we grow, our goal remains the same — to be your go-to online store, delivering convenience without compromising on authenticity.
                        </p>

                        <p className='aboutus-story-para'>
                            Welcome to The Corner Store — where tradition meets technology, and every customer feels right at home.
                        </p>


                    </div>

                    <div className='aboutus-story-right-container'>
                        <div className='aboutus-story-right-image-wrapper'></div>
                        <img className='aboutus-story-right-image' src="https://images.pexels.com/photos/34987639/pexels-photo-34987639.jpeg" alt="Our Story Image" />
                    </div>
                </div>
            </div>
            {/* ---------------------------------------Our Story End--------------------------------------------- */}
            {/* ---------------------------------------The Team Start--------------------------------------------- */}
            <div className='aboutus-team-main-container'>
                <div className='aboutus-team-heading'>
                    <h3>OUR TEAM</h3>
                </div>
                <div className='aboutus-team-space-container'>
                    {teamObj.slice(0, 3).map((item) => (
                        <div key={item.id} className="aboutus-team-card">
                            <div className="aboutus-team-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.altname}
                                    className="aboutus-team-image"
                                />
                            </div>
                            <div className="aboutus-team-content">
                                <span className='aboutus-team-name'>{item.name}</span>
                                <span className='aboutus-team-designation'>{item.altname}</span>
                                <div className='aboutus-team-social-links'>
                                    <Linkedin className="aboutus-team-social-logos" size={20} />
                                    <Twitter className="aboutus-team-social-logos" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* ---------------------------------------The Team End--------------------------------------------- */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
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
                        <a href="" className='footer-info-links'>Sitemap</a>
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
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>
    )
}

export default AboutUs
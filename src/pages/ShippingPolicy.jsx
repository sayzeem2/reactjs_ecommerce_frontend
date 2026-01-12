import React from 'react'
import "./ShippingPolicy.css"
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import { useNavigate } from 'react-router-dom'

function ShippingPolicy() {

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
            <main className="shipping-container">
                <h1 className="shipping-title">Shipping Policy</h1>
                <p className="shipping-updated">Last Updated: January 9, 2026</p>

                <section className="shipping-section">
                    <p className='shipping-section-main-outline'>
                        This Shipping Policy outlines how orders placed on{" "}
                        <strong>www.TheCornerStore.com</strong> are processed, shipped, and
                        delivered. By placing an order with <strong>The Corner Store</strong>,
                        you agree to the terms stated below.
                    </p>
                </section>
                <div className='shipping-section-division-container'>
                    <section className="shipping-section">
                        <h2>1. Shipping Locations</h2>
                        <p>
                            We currently ship orders across India. At this time, we do not offer
                            international shipping.
                        </p>
                    </section>
                </div>
                <div className='shipping-section-division-alternate-container'>
                    <section className="shipping-section">
                        <h2>2. Order Processing Time</h2>
                        <p>
                            Orders are typically processed within 1–3 business days after
                            successful payment. Orders placed on weekends or public holidays
                            will be processed on the next working day.
                        </p>
                    </section>
                </div>
                <div className='shipping-section-division-container'>
                    <section className="shipping-section">
                        <h2>3. Shipping Methods & Delivery Time</h2>
                        <p>
                            Delivery timelines may vary based on your location and courier
                            partner:
                        </p>

                        <span className='shipping-section-strong'><strong >Metro & Urban Areas:</strong> 3–5 business days</span><span className='shipping-section-strong'><strong>Other Locations:</strong> 5–8 business days</span>


                    </section>
                </div>
                <div className='shipping-section-division-alternate-container'>
                    <section className="shipping-section">
                        <h2>4. Shipping Charges</h2>
                        <p>
                            Shipping charges, if applicable, will be clearly displayed at
                            checkout before payment. We may offer free shipping during promotions
                            or on selected orders.
                        </p>
                    </section>
                </div>
                <div className='shipping-section-division-container'>
                    <section className="shipping-section">
                        <h2>5. Order Tracking</h2>
                        <p>
                            Once your order is shipped, you will receive tracking details via
                            email or SMS. You can track your shipment using the provided tracking
                            link.
                        </p>
                    </section>
                </div>
                <div className='shipping-section-division-alternate-container'>
                    <section className="shipping-section">
                        <h2>6. Delayed or Lost Shipments</h2>
                        <p>
                            While we work with reliable courier partners, The Corner Store is not
                            responsible for delays caused by third-party logistics providers.
                        </p>
                        <p> If your order appears delayed or lost, please contact our support
                            team for assistance.</p>
                    </section>
                </div>
                <div className='shipping-section-division-container'>
                    <section className="shipping-section">
                        <h2>7. Incorrect Address</h2>
                        <p>
                            Customers are responsible for providing accurate shipping details.
                            Orders shipped to incorrect addresses provided by the customer may
                            not be eligible for refunds or re-shipment.
                        </p>
                    </section>
                </div>
                <div className='shipping-section-division-alternate-container'>
                    <section className="shipping-section">
                        <h2>8. Damaged Packages</h2>
                        <p>
                            If you receive a damaged package, please contact us within 48 hours
                            of delivery with photos of the package and product. We will review
                            the issue and assist accordingly.
                        </p>
                    </section>
                </div>
                <div className='shipping-section-division-container'>
                    <section className="shipping-section">
                        <h2>9. Contact Information</h2>
                        <p>
                            For shipping-related questions, contact us at: <br />
                            <strong>Email:</strong> support@TheCornerStore.com <br />
                            <strong>Location:</strong> Udaipur, Rajasthan, India
                        </p>
                    </section>
                </div>
            </main>

            {/* ---------------------------------------feedback End--------------------------------------------- */}
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
                        <a href="" className='footer-info-links'>Shipping Policy</a>
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
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>
    )
}

export default ShippingPolicy








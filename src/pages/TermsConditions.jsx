import React from 'react'
import "./TermsConditions.css"
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import { useNavigate } from 'react-router-dom'

function TermsConditions() {

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

            <main className="terms-container">
                <h1 className="terms-title">Terms and Conditions</h1>
                <p className="terms-updated">Last Updated: January 9, 2026</p>

                <section className="terms-section">
                    <p>
                        Welcome to <strong>The Corner Store</strong>. These Terms and
                        Conditions ("Terms") govern your use of our website, services, and
                        products available.
                        <strong>www.TheCornerStore.com</strong>. By accessing or using our
                        website, you agree to be bound by these Terms. If you do not agree
                        with any part of these Terms, please discontinue use of our services.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>1. Definitions</h2>
                    <ul>
                        <li><strong>Website:</strong> www.TheCornerStore.com</li>
                        <li><strong>We / Us / Our:</strong> The Corner Store</li>
                        <li><strong>User / You:</strong> Any individual accessing the website</li>
                        <li><strong>Products:</strong> Clothing and fashion-related items sold on the website</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>2. Eligibility</h2>
                    <p>
                        You must be at least 18 years old or accessing the website under
                        parental or legal guardian supervision to use this website and
                        place orders.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>3. Account Registration</h2>
                    <ul>
                        <li>Creating an account may be required to make purchases.</li>
                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                        <li>We reserve the right to suspend or terminate accounts containing false or misleading information.</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>4. Products & Availability</h2>
                    <p>
                        All products displayed on the website are subject to availability.
                        We reserve the right to modify or discontinue any product without
                        prior notice. Product images are for reference purposes only, and
                        actual colors may vary slightly.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>5. Pricing & Payments</h2>
                    <p>
                        All prices are listed in Indian Rupees (INR) and are subject to change
                        without notice. Payments are processed securely via third-party
                        payment gateways. The Corner Store does not store your card or
                        payment details.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>6. Order Confirmation & Cancellation</h2>
                    <p>
                        Orders are confirmed only after successful payment. We reserve the
                        right to cancel or refuse any order due to product unavailability,
                        pricing errors, or suspected fraudulent activity.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>7. Shipping & Delivery</h2>
                    <p>
                        Delivery timelines provided are estimates only. The Corner Store is
                        not responsible for delays caused by courier partners, natural
                        events, or circumstances beyond our control.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>8. Returns & Refunds</h2>
                    <p>
                        Returns or exchanges are accepted within 7 days from the date of
                        delivery. Items must be unused, unwashed, and returned in original
                        packaging. Refunds will be processed after quality inspection.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>9. User Conduct</h2>
                    <p>
                        You agree not to misuse the website, attempt unauthorized access,
                        upload malicious code, or engage in any activity that disrupts the
                        website’s functionality or security.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>10. Intellectual Property</h2>
                    <p>
                        All website content including logos, text, graphics, designs, and
                        source code are the exclusive property of The Corner Store.
                        Unauthorized use or reproduction is strictly prohibited.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>11. Limitation of Liability</h2>
                    <p>
                        The Corner Store shall not be liable for any indirect, incidental, or
                        consequential damages arising from the use or inability to use this
                        website or its services.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>12. Governing Law</h2>
                    <p>
                        These Terms shall be governed and interpreted in accordance with the
                        laws of India. Any disputes shall be subject to the jurisdiction of
                        courts located in Udaipur, Rajasthan.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>13. Contact Information</h2>
                    <p>
                        Email: support@TheCornerStore.com <br />
                        Business Name: The Corner Store <br />
                        Location: Udaipur, Rajasthan, India
                    </p>
                </section>
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

export default TermsConditions








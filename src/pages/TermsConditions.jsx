import React, { useState } from 'react'
import "./TermsConditions.css"
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import cornerStoreLogo from '../assets/TheCornerStoreLogo.png'
import { useNavigate } from 'react-router-dom'
import { Badge, BadgePlus } from 'lucide-react'

function TermsConditions() {
    const [currentTerms, setCurrentTerms] = useState(1);
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

    const sendToDefinitionPage = () => {
        setCurrentTerms(1)
    }
    const sendToEligibilityPage = () => {
        setCurrentTerms(2)
    }
    const sendToRegistrationPage = () => {
        setCurrentTerms(3)
    }
    const sendToAvailabilityPage = () => {
        setCurrentTerms(4)
    }
    const sendToPricingPage = () => {
        setCurrentTerms(5)
    }
    const sendToConfirmCancelPage = () => {
        setCurrentTerms(6)
    }
    const sendToShippingDeliveryPage = () => {
        setCurrentTerms(7)
    }
    const sendToReturnsRefundsPage = () => {
        setCurrentTerms(8)
    }
    const sendToContactPage = () => {
        setCurrentTerms(9)
    }


    return (
        <div>
            {/* -----------------------------------navbar part start------------------------------------------- */}
            <nav className="terms-nav-container">
                <div className="terms-nav-element-container">
                    <div className='terms-nav-element-left'>
                        <div className='terms-nav-logo' onClick={goToHomePage}></div>
                        <div className='terms-nav-categories-container'>
                            <a href="" className="terms-nav-categories-shop">Shop</a>
                            <a href="" className='terms-nav-categories-men'>Men</a>
                            <a href="" className='terms-nav-categories-women'>Women</a>
                            <a href="" className='terms-nav-categories-combos'>Combos</a>
                            <a href="" className='terms-nav-categories-joggers'>Joggers</a>
                        </div>
                    </div>
                    <div className='terms-nav-search-container'>
                        <a href="#" className='terms-nav-search-img'></a>
                        <input type="text" className='terms-nav-search-input' placeholder='Search' />
                    </div>
                    <div className='terms-nav-element-right'>
                        <div className='terms-nav-icons-container'>
                            <div className='terms-nav-wishlist-icon'></div>
                            <div className='terms-nav-account-icon'></div>
                            <div className='terms-nav-shoppingCart-icon'></div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------Terms Mid Start--------------------------------------------- */}
            <div className='terms-mid-main-page-container'>
                <div className='terms-mid-main-content-container'>
                    <div className='terms-mid-main-left-container'>
                        <div className='terms-mid-main-left-content-container'>
                            <div className='terms-mid-main-left-image-wrapper'>
                                <img src={cornerStoreLogo} alt="corner store logo" className='terms-mid-main-left-image' />
                            </div>
                            <div className='terms-mid-main-left-horizontal-line'></div>
                            <div className='terms-mid-main-left-links-container'>
                                <span className={`terms-mid-main-anchor ${currentTerms === 1 ? 'active-term' : ''}`} onClick={() => { sendToDefinitionPage() }}>{currentTerms === 1 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Definitions</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 2 ? 'active-term' : ''}`} onClick={() => { sendToEligibilityPage() }}>{currentTerms === 2 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Eligibility</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 3 ? 'active-term' : ''}`} onClick={() => { sendToRegistrationPage() }}>{currentTerms === 3 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Account Registration</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 4 ? 'active-term' : ''}`} onClick={() => { sendToAvailabilityPage() }}>{currentTerms === 4 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Products & Availability</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 5 ? 'active-term' : ''}`} onClick={() => { sendToPricingPage() }}>{currentTerms === 5 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Pricing & Payments</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 6 ? 'active-term' : ''}`} onClick={() => { sendToConfirmCancelPage() }}>{currentTerms === 6 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Confirm / Cancel</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 7 ? 'active-term' : ''}`} onClick={() => { sendToShippingDeliveryPage() }}>{currentTerms === 7 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Shipping & Delivery</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 8 ? 'active-term' : ''}`} onClick={() => { sendToReturnsRefundsPage() }}>{currentTerms === 8 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Returns & Refunds</span></span>
                                <span className={`terms-mid-main-anchor ${currentTerms === 9 ? 'active-term' : ''}`} onClick={() => { sendToContactPage() }}>{currentTerms === 9 ? <BadgePlus className='badges' /> : <Badge className='badges' />}<span>Contact Information</span></span>
                            </div>
                        </div>

                    </div>
                    <div className='terms-mid-main-right-container'>
                        <div className='terms-mid-main-right-title-container'>
                            <h2 className='terms-mid-main-right-heading'>Terms & Conditions</h2>
                        </div>
                        {/* --------------------------------------Definition Start------------------------------------------------------- */}
                        {currentTerms === 1 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>

                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Definitions</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <li><strong>Website:</strong> www.TheCornerStore.com</li>
                                        <li><strong>We / Us / Our:</strong> The Corner Store</li>
                                        <li><strong>User / You:</strong> Any individual accessing the website</li>
                                        <li><strong>Products:</strong> Clothing and fashion-related items sold on the website</li>
                                        <p>For the purposes of these Terms and Conditions, the following definitions apply and shall govern the interpretation of this document. The website operated under the domain www.TheCornerStore.com
                                            is referred to as the “Website.” Throughout the Website and these Terms and Conditions, the terms “We,” “Us,” and “Our” refer to The Corner Store, its owners, and operators. The terms “User,” “You,” and “Your” refer to any individual who accesses, browses, or otherwise uses the Website, whether or not a purchase is made. The term “Products” refers to all clothing and fashion-related items displayed, advertised, or offered for sale on the Website. These definitions apply throughout these Terms and Conditions unless otherwise stated.</p>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        )}
                        {/* -------------------------------------------------Definition End------------------------------------------------------- */}
                        {/* --------------------------------------Eligibility Start------------------------------------------------------- */}
                        {currentTerms === 2 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Eligibility</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>
                                            Access to and use of this Website is available only to individuals who are at least 18 years of age, or to individuals accessing the Website under the supervision of a parent or legal guardian. By using the Website, you represent and warrant that you meet these eligibility requirements and that any information you provide is accurate and truthful. If you are a parent or legal guardian permitting a minor to use the Website, you accept full responsibility for the minor’s actions, including any purchases made through the Website.
                                        </p>
                                        <p>
                                            We reserve the right, at our sole discretion, to restrict, suspend, or terminate access to the Website or to cancel any order if we believe that a user does not meet the eligibility requirements or is using the Website in violation of these Terms and Conditions. Use of the Website is permitted only for lawful purposes and by individuals who are legally capable of entering into binding agreements under applicable laws and regulations.
                                        </p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Eligibility End------------------------------------------------------ */}
                        {/* --------------------------------------Registration Start------------------------------------------------------- */}
                        {currentTerms === 3 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Account Registration</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <li>Creating an account may be required to make purchases.</li>
                                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                                        <li>We reserve the right to suspend or terminate accounts containing false or misleading information.</li>
                                        <p>To access certain features of the Website or to place an order, you may be required to create an account. When registering for an account, you agree to provide accurate, current, and complete information and to keep your account details updated at all times. You are solely responsible for maintaining the confidentiality of your account credentials, including your username and password, and for all activities that occur under your account.</p>
                                        {/* <p>You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We reserve the right to suspend, restrict, or terminate any account at our discretion if we believe that the information provided is inaccurate, misleading, or incomplete, or if the account is being used in violation of these Terms and Conditions. We shall not be liable for any loss or damage arising from your failure to protect your account information or from unauthorized access to your account.</p> */}
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Registration End------------------------------------------------------ */}
                        {/* --------------------------------------Products/Availability Start------------------------------------------------------- */}
                        {currentTerms === 4 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Products & Availability</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>All products displayed on the Website, including clothing and fashion-related items, are subject to availability. We make every effort to ensure that product descriptions, images, and pricing are accurate; however, errors may occur. The Corner Store reserves the right to limit the quantity of any product, to discontinue products at any time without prior notice, and to correct any errors, inaccuracies, or omissions, including after you have placed an order. Display of a product on the Website does not guarantee that the product will be available for purchase.</p>
                                        <p>Product availability may vary based on location, stock levels, or other factors beyond our control. In the event that a product you have ordered is unavailable, we will notify you as soon as possible and may offer you the option to select an alternative product or receive a full refund. The Corner Store does not guarantee that all products will be in stock at all times and reserves the right to refuse or cancel any order for any reason, including suspected fraud or violation of these Terms and Conditions.</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Products/Availability End------------------------------------------------------ */}
                        {/* --------------------------------------Pricing and Payments Start------------------------------------------------------- */}
                        {currentTerms === 5 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Pricing & Payments</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>All prices for products listed on the Website are displayed in the currency indicated and are subject to change without prior notice. While we strive to ensure the accuracy of product prices, The Corner Store does not guarantee that all prices or product information are error-free. </p>
                                        <p>In the event of a pricing error, we reserve the right to cancel or refuse any orders placed for products listed at an incorrect price, even after an order has been confirmed, and to notify you as soon as possible. Payments for products must be made in full at the time of purchase using the payment methods offered on the Website.</p>
                                        <p>By providing payment information, you represent and warrant that you are authorized to use the payment method and that all information provided is accurate and complete. We reserve the right to suspend or cancel any order if payment cannot be processed, if fraudulent activity is suspected, or if there is any violation of these Terms and Conditions. All transactions are subject to applicable taxes, fees, or charges, which will be indicated at checkout.</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Pricing and Payments  End------------------------------------------------------ */}
                        {/* --------------------------------------Confirmation / Cancellation Start------------------------------------------------------- */}
                        {currentTerms === 6 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Order Confirmation & Cancellation</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>Once you place an order on the Website, you will receive an order confirmation via email. This confirmation acknowledges that we have received your order but does not constitute acceptance of the order. The Corner Store reserves the right to accept or reject any order at our sole discretion, including but not limited to instances of product unavailability, errors in pricing, suspected fraud, or any violation of these Terms and Conditions. Acceptance of your order and completion of the contract between you and The Corner Store occurs only when we dispatch the products to the address you provided.</p>
                                        <p>You may request to cancel an order prior to shipment by contacting our customer service team. While we will make reasonable efforts to accommodate such requests, The Corner Store cannot guarantee that an order can be cancelled once processing or shipping has begun. In the event of a successful cancellation, any payment made will be refunded in accordance with our refund policy. We reserve the right to cancel orders at any time for reasons including, but not limited to, suspected fraudulent activity, errors in product information or pricing, or breaches of these Terms and Conditions.</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Confirmation / Cancellation End------------------------------------------------------ */}
                        {/* --------------------------------------Shipping / Delivery Start------------------------------------------------------- */}
                        {currentTerms === 7 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Shipping & Delivery</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>The Corner Store offers shipping of products to the addresses provided by you during checkout. Delivery times are estimates only and may vary depending on your location, product availability, selected shipping method, and other factors outside our control.  Risk of loss and title for all products passes to you upon delivery to the address provided.</p>
                                        <p>You are responsible for providing accurate, complete, and up-to-date delivery information. If a delivery is unsuccessful due to incorrect or incomplete information, inability to access the delivery location, or failure to accept delivery, additional charges may apply for re-delivery. </p>
                                        <p>In the event that a product is lost, damaged, or missing during shipping, you must notify The Corner Store immediately so that we can investigate and take appropriate action. The Corner Store reserves the right to refuse or cancel shipments at our discretion, including for suspected fraud, violations of these Terms and Conditions, or other circumstances that prevent successful delivery. By placing an order, you agree to these shipping and delivery terms.</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Shipping / Delivery End------------------------------------------------------ */}
                        {/* --------------------------------------Returns & Refunds Start------------------------------------------------------- */}
                        {currentTerms === 8 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Returns & Refunds</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>The Corner Store aims to ensure your satisfaction with all products purchased through the Website. If you are not completely satisfied with a product, you may be eligible to return it in accordance with our return policy. All returned products must be unused, in their original condition, and accompanied by proof of purchase. Certain products, including personalized or final-sale items, may not be eligible for return. We reserve the right to refuse any return that does not meet these requirements.</p>
                                        <p>Once a returned product is received and inspected, we will notify you of the approval or rejection of your refund. If approved, a refund will be processed using the original method of payment within a reasonable period of time. The Corner Store is not responsible for any shipping or handling charges incurred during the return process unless otherwise stated. By making a purchase, you agree to comply with our returns and refunds procedures as outlined on the Website.</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Returns & Refunds End------------------------------------------------------ */}
                        {/* --------------------------------------Contact Information Start------------------------------------------------------- */}
                        {currentTerms === 9 && (<div key={currentTerms} className='terms-mid-main-right-content-container active'>
                            <div>
                                <h2 className='terms-mid-main-right-content-heading'>Contact Information</h2>
                            </div>
                            <div>
                                <p className='terms-mid-main-right-content-para'>
                                    <ul className='terms-mid-main-right-content-list'>
                                        <p>If you have any questions, concerns, or inquiries regarding the Website, Products, orders, or these Terms and Conditions, you may contact The Corner Store using the information provided on the Website. Our customer service team is available to assist you and aims to respond to all inquiries promptly and professionally.</p>
                                        <p>You may reach us through the designated email address, phone number, or contact form available on www.TheCornerStore.com
                                            . We encourage you to provide accurate and complete information when contacting us so that we can address your request efficiently. By contacting us, you agree to provide truthful information and to use the communication channels responsibly and lawfully.</p>
                                        <p>
                                            <strong>Email:</strong> support@TheCornerStore.com <br />
                                            <strong>Business Name:</strong> The Corner Store <br />
                                            <strong>Location:</strong> Udaipur, Rajasthan, India
                                        </p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        )}
                        {/* -------------------------------------------------Returns & Refunds End------------------------------------------------------ */}



                    </div>
                </div>
            </div>

            {/* ---------------------------------------Terms Mid End--------------------------------------------- */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <footer className='term-footer-main-container'>
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
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>
    )
}

export default TermsConditions








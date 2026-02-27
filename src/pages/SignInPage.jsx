import React from 'react'
import "./SignInPage.css"
import { useNavigate } from 'react-router-dom'

import LogoImg from '../assets/Aurora_logo.svg'
import { ShoppingCartOutlined, FavoriteBorderOutlined, VisibilityOff, Google, X, Search } from '@mui/icons-material'


function SignInPage() {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
    }
    const goToAboutPage = () => {
        navigate("/about-us")
    }
    const goToSignIn = () => {
        navigate("/")
    }
    const goToSignUp = () => {
        navigate("/signup")
    }
    const goToResetPassword = () => {
        navigate("/reset-password")
    }
    const goToContactPage = () => {
        navigate("/contact-us")
    }
    const goToFaqPage = () => {
        navigate("/FAQ")
    }
    const goToTermsPage = () => {
        navigate("/terms-conditions")
    }


    return (
        <div className='signin-page-main-container'>
            {/* -------------------------------------------navbar part start------------------------------------------------------ */}
            <nav className="signin-nav-guest-container">
                <img src={LogoImg} alt="Logo" className='signin-nav-guest-image-main-container' onClick={goToSignIn} />
                <div className='signin-nav-guest-links-main-container'>
                    <div className='signin-nav-guest-links-content-container'>
                        <span className='signin-nav-guest-links-span' onClick={goToAboutPage}>About Us</span>
                    </div>
                    <div className='signin-nav-guest-links-content-container'>
                        <span className='signin-nav-guest-links-span' onClick={goToContactPage}>Contact Us</span>
                    </div>
                    <div className='signin-nav-guest-links-content-container'>
                        <span className='signin-nav-guest-links-span' onClick={goToFaqPage}>FAQ's</span>
                    </div>
                    <div className='signin-nav-guest-links-content-container'>
                        <span className='signin-nav-guest-links-span' onClick={goToTermsPage}>Terms</span>
                    </div>

                </div>
                <div className='signin-nav-search-container'>
                    {/* <a href="#" className='signin-nav-search-img'></a> */}
                    <input type="text" className='signin-nav-search-input' placeholder='Search' />
                    <Search className='signin-nav-search-magnifier-img'/>
                </div>
                <div className='signin-nav-signup-btn-container'>
                    <button className='signin-nav-signup-btn' onClick={goToSignUp}>Sign Up</button>
                </div>
                <div className='signin-nav-icons-container'>
                    <div className='signin-nav-icons-content-container'>
                        <div className='signin-nav-icons-wrapper'>
                            <FavoriteBorderOutlined sx={{ fontSize: 30, color: 'var(--font-color)' }} />
                        </div>

                        <div className='signin-nav-icons-wrapper'>
                            <ShoppingCartOutlined sx={{ fontSize: 30, color: 'var(--font-color)' }} />
                        </div >
                    </div>
                </div>
            </nav>
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/* -------------------------------------------Left part------------------------------------------------ */}
            <div>
                <div className='signin-mid-main-container'>
                    <div className='signin-mid-left-image-container'>
                        <div className='signin-mid-left-image-overlay'>
                            <img src="https://i.pinimg.com/1200x/71/da/66/71da66e2a48e97ef3c11893f4631bb1e.jpg"
                                alt="fashion left"
                                className='signin-mid-left-image'
                            />
                        </div>
                    </div>
                    {/* -------------------------------------------Left part----------------------------------------------- */}
                    {/* -------------------------------------------Right part---------------------------------------------- */}
                    {/* -------------------------------------------ResetPasswordPage Part---------------------------------------- */}
                    <div className='signin-mid-right-main-container'>
                        <div className='signin-mid-right-main-form-wrapper'>
                            {/* -------------------------------------------Sign in H1 Start---------------------------------------- */}
                            <div className='signin-mid-right-heading-container'>
                                <h1 className='signin-mid-right-heading'>Sign In Page</h1>
                            </div>
                            {/* -------------------------------------------Sign in H1 End------------------------------------------- */}
                            {/* -------------------------------------------Sign in Buttons Start------------------------------------ */}
                            <div className='signin-mid-right-form-content-container'>
                                <div className='signin-mid-right-form-social-buttons'>
                                    <button className='signin-mid-right-form-social-btn-google-btn'>
                                        <Google className="signin-mid-right-form-social-icon" />
                                        Continue With Google
                                    </button>
                                    <button className='signin-mid-right-form-social-btn-twitter-btn'>
                                        <X className="signin-mid-right-form-social-icon" />
                                        Continue With X
                                    </button>
                                </div>
                                {/* --------------------------------Sign in Buttons End------------------------------------ */}
                                {/* -------------------------------Sign in Divider OR Start-------------------------------- */}
                                <div className='sign-in-mid-right-or-divider-container'>
                                    <span className='sign-in-mid-right-or-divider-span'>OR</span>
                                </div>
                                {/* ------------------------------Sign in Divider OR End------------------------------------ */}
                                {/* --------------------------------Sign in Username,email input Start---------------------------------- */}
                                <div className='sign-in-mid-right-username-input'>
                                    <label htmlFor="">User name or email address</label>
                                    <input type="text" placeholder='' className='sign-in-mid-right-email-input' required />
                                </div>
                                {/* --------------------------------Sign in Username,email input End---------------------------------- */}
                                {/* --------------------------------Sign in password input Start---------------------------------- */}
                                <div className='sign-in-mid-right-password-container'>
                                    <div className='sign-in-mid-right-password-label-container'>
                                        <label htmlFor="">Password</label>
                                        <div className='sign-in-mid-right-hidden-container'>

                                            <VisibilityOff className='sign-in-mid-hidden-img' />
                                            <a href="#" className='sign-in-mid-hidden-label'>Hide</a>
                                        </div>
                                    </div>
                                    <input type="text" placeholder='' className='sign-in-mid-right-password-input' required />
                                    <div className='sign-in-mid-right-forgot-link'>
                                        <a href="#" className='sign-in-mid-hidden-forgot' onClick={goToResetPassword}>Forgot your password</a>
                                    </div>
                                    <div className='sign-in-mid-right-button-container'>
                                        <button className='sign-in-mid-right-login-btn' onClick={goToHomePage}>Sign In</button>


                                        <span className='sign-in-mid-right-signup-span'>Don't have an account? <a href="#" className="sign-in-mid-right-signup-link" onClick={goToSignUp}>Sign up</a></span>
                                    </div>
                                </div>
                                {/* --------------------------------Sign in password input End---------------------------------- */}
                            </div>
                        </div>
                    </div>

                    {/* -------------------------------------------Right part--------------------------------------- */}

                </div>
            </div>
        </div>
    )
}

export default SignInPage
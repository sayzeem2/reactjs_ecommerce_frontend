import React from 'react'
import "./SignInPage.css"
import { useNavigate } from 'react-router-dom'

function SignInPage() {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
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
    return (
        <div className='signin-page-main'>
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            <nav className="signin-nav-container">
                <div className="signin-nav-element-container">
                    <div className='signin-nav-element-left'>
                        <div className='signin-nav-logo' onClick={goToSignIn}></div>
                        <div className='signin-nav-search-container'>
                            <a href="#" className='signin-nav-search-img'></a>
                            <input type="text" className='signin-nav-search-input' placeholder='Search' />
                        </div>
                        <select name="signin-nav-language" id="signin-nav-language" className='signin-nav-language-sel'>
                            <option value="English">English(United States)</option>
                            <option value="Hindi">Hindi(India)</option>
                        </select>
                    </div>
                    <div className='signin-nav-element-right'>
                        <div className='signin-nav-button-container'>
                            <a href="#" className='signin-nav-login-btn' onClick={goToSignIn}>Login</a>
                            <a href="#" className='signin-nav-signup-btn' onClick={goToSignUp}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/* -------------------------------------------Left part------------------------------------------------ */}
            <div>
                <div className='signin-mid-container'>
                    <div className='signin-left'>
                        <div className='image-overlay'>
                            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80" alt="left image" className='signin-image' />
                        </div>
                    </div>
                    {/* -------------------------------------------Left part----------------------------------------------- */}
                    {/* -------------------------------------------Right part---------------------------------------------- */}
                    {/* -------------------------------------------ResetPasswordPage Part---------------------------------------- */}
                    <div className='signin-right'>
                        <div className='signin-form-wrapper'>
                            {/* -------------------------------------------Sign in H1 Start---------------------------------------- */}
                            <div className='signin-right-title-container'>
                                <h1 className='signin-title'>Sign In Page</h1>
                            </div>
                            {/* -------------------------------------------Sign in H1 End------------------------------------------- */}
                            {/* -------------------------------------------Sign in Buttons Start------------------------------------ */}
                            <div className='signin-right-form-container'>
                                <div className='social-buttons'>
                                    <button className='social-btn google-btn'>
                                        <svg className="social-icon" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        Continue With Google
                                    </button>
                                    <button className='social-btn twitter-btn'>
                                        <svg className="social-icon" viewBox="0 0 24 24">
                                            <path fill="#1DA1F2" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                                        </svg>
                                        Continue With Twitter
                                    </button>
                                </div>
                                {/* --------------------------------Sign in Buttons End------------------------------------ */}
                                {/* -------------------------------Sign in Divider OR Start-------------------------------- */}
                                <div className='divider'>
                                    <span>OR</span>
                                </div>
                                {/* ------------------------------Sign in Divider OR End------------------------------------ */}
                                {/* --------------------------------Sign in Username,email input Start---------------------------------- */}
                                <div className='right-username-input'>
                                    <label htmlFor="">User name or email address</label>
                                    <input type="text" placeholder='' className='right-email-input' required />
                                </div>
                                {/* --------------------------------Sign in Username,email input End---------------------------------- */}
                                {/* --------------------------------Sign in password input Start---------------------------------- */}
                                <div className='right-password-container'>
                                    <div className='right-password-label-container'>
                                        <label htmlFor="">Password</label>
                                        <div className='right-hidden-container'>
                                            <a href="#" className='hidden-img'></a>
                                            <a href="#" className='hidden-label'>Hide</a>
                                        </div>
                                    </div>
                                    <input type="text" placeholder='' className='right-password-input' required />
                                    <div className='right-forgot-link'>
                                        <a href="#" className='hidden-forgot' onClick={goToResetPassword}>Forgot your password</a>
                                    </div>
                                    <div className='right-button-container'>
                                        <a href="#" className='right-login-btn' onClick={goToHomePage}>Sign in</a>
                                        <a href="#" className='right-signup-btn'>Don't have an account? <span onClick={goToSignUp}>Sign up</span></a>
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
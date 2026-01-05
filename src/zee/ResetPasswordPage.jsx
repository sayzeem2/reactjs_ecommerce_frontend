import React, { useState } from 'react'
import "./ResetPasswordPage.css"
import { useNavigate } from 'react-router-dom'

function ResetPasswordPage() {
    const navigate = useNavigate();
    const [currentView, setCurrentView] = useState(0);
    const goToSignIn = () => {
        navigate("/")
    }
    const goToSignUp = () => {
        navigate("/signup")
    }
    const sendToEmailVerifyPage = () => {
        setCurrentView(1)
    }
    const sendToOTPVerifyPage = () => {
        setCurrentView(2)
    }
    const sendToCreateNewPasswordPage = () => {
        setCurrentView(3)
    }
    return (
        <div className='reset-page-main'>
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            <nav className="reset-nav-container">
                <div className="reset-nav-element-container">
                    <div className='reset-nav-element-left'>
                        <div className='reset-nav-logo' onClick={goToSignIn}></div>
                        <div className='reset-nav-search-container'>
                            <a href="#" className='reset-nav-search-img'></a>
                            <input type="text" className='reset-nav-search-input' placeholder='Search' />
                        </div>
                        <select name="nav-language" id="nav-language" className='reset-nav-language-sel'>
                            <option value="English">English(United States)</option>
                            <option value="Hindi">Hindi(India)</option>
                        </select>
                    </div>
                    <div className='reset-nav-element-right'>
                        <div className='reset-nav-button-container'>
                            <a href="#" className='reset-nav-login-btn' onClick={goToSignIn}>Login</a>
                            <a href="#" className='reset-nav-signup-btn' onClick={goToSignUp}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/* -------------------------------------------Sign in Left part------------------------------------------------ */}
            <div>
                <div className='mid-container'>
                    <div className='reset-left'>
                        <div className='reset-image-overlay'>
                            <img src="https://images.unsplash.com/photo-1631832255415-8583788a11cb?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="left image" className='reset-image' />
                        </div>
                    </div>
                    {/* -------------------------------------------Sign in Left part----------------------------------------------- */}
                    {/* -------------------------------------------Sign in Right part---------------------------------------------- */}
                    {/* --------------------------------------ResetPasswordPage Right part start------------------------ */}
                    {currentView == 0 && (<div className='reset-right'>
                        <div className='reset-form-wrapper'>

                            <div className='reset-right-title-container'>
                                <h1 className='reset-title'>Reset Your Password</h1>
                                <a href="#" className='reset-right-title'>Enter your email and we'll send you a link to reset your password.</a><br />
                                <a href="#" className='reset-right-title'>Please check it</a>
                            </div>

                            <div className='signup-right-form-container'>

                                <div className='reset-right-email-input-container'>
                                    <label htmlFor="" className="reset-right-email-message">Email</label>
                                    <input type="text" placeholder='' className='reset-right-email-input' />
                                    <label htmlFor="" className='reset-right-email-error-message'>Error Message</label>
                                </div>

                                <div className='reset-right-email-button-container'>
                                    <div className='reset-right-button-container'>
                                        <a href="#" className='reset-right-send-btn' onClick={() => { sendToEmailVerifyPage() }}>Send</a>
                                        <a href="#" className='reset-right-login-btn'>Back to <span onClick={goToSignIn}>Login</span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)}
                    {/* --------------------------------------ResetPasswordPage Right part end------------------------ */}
                    {/* --------------------------------------CheckEmailPage Right part start------------------------ */}
                    {currentView == 1 && (<div className='checkemail-right'>
                        <div className='checkemail-form-wrapper'>

                            <div className='checkemail-right-title-container'>
                                <h1 className='checkemail-title'>Check Email</h1>
                                <label htmlFor='' className='checkemail-right-title'>Please check your email inbox and click on the provided link to reser you password. If you don't receive email, <a href=''>Click here to resend</a></label><br />
                            </div>

                            <div className='reset-right-email-button-container'>
                                <div className='reset-right-button-container'>
                                    <a href="#" className='reset-right-send-btn' onClick={() => { sendToOTPVerifyPage() }}>Send</a>
                                </div>
                            </div>

                            <div className='signup-right-form-container'>
                                <div className='checkemail-right-button-container'>
                                    <label className='checkemail-right-login-btn'>&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back to <a href='' onClick={goToSignIn}>Login</a></label>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    {/* --------------------------------------CheckEmailPage Right part end------------------------ */}
                    {/* --------------------------------------VerificationPage Right part start------------------------ */}
                    {currentView == 2 && (<div className='verification-right'>
                        <div className='verification-form-wrapper'>

                            <div className='verification-right-title-container'>
                                <h1 className='verification-title'>Verification</h1>
                                <a href="#" className='verification-right-title'>Verify your code</a><br />
                            </div>

                            <div className='signup-right-form-container'>

                                <div className='verification-right-email-input-container'>
                                    <label htmlFor="" className="verification-right-email-message">Verification Code</label>
                                    <input type="text" placeholder='' className='verification-right-email-input' />
                                    <label htmlFor="" className='verification-right-email-error-message'>Error Message</label>
                                </div>

                                <div className='verification-right-email-button-container'>
                                    <div className='verification-right-button-container'>
                                        <a href="#" className='verification-right-send-btn' onClick={() => { sendToCreateNewPasswordPage() }}>Verify Code</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)}
                    {/* --------------------------------------VerificationPage Right part end------------------------ */}
                    {/* --------------------------------------CreateNewPasswordPage Right part start------------------------ */}
                    {currentView == 3 && (<div className='createnew-right'>
                        <div className='createnew-form-wrapper'>

                            <div className='createnew-right-title-container'>
                                <h1 className='createnew-title'>Create New Password</h1>
                                <label htmlFor='' className='createnew-right-title'>Your new password must be different from previous used passwords</label><br />
                            </div>

                            <div className='signup-right-form-container'>

                                <div className='createnew-right-password-input-container-with-image'>
                                    <label htmlFor="" className="createnew-right-password-message">Password</label>
                                    <div className='createnew-right-password-container-with-image'>
                                        <input type="password" placeholder='' className='createnew-right-password-input-with-image' />
                                        <a href="#" className='hidden-img'></a>
                                    </div>
                                    <label htmlFor="" className='createnew-right-password-error-message'>Must be atleast 8 characters</label>
                                </div>

                                <div className='createnew-right-password-input-container'>
                                    <label htmlFor="" className="createnew-right-password-message">Confirm Password</label>
                                    <input type="password" placeholder='' className='createnew-right-password-input' />
                                    <label htmlFor="" className='createnew-right-confirm-password-error-message'>New password and confirm new password do not match</label>
                                </div>

                                <div className='createnew-right-password-button-container'>
                                    <div className='createnew-right-button-container'>
                                        <a href="#" className='createnew-right-reset-btn' onClick={goToSignIn}>Reset Password</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)}
                    {/* --------------------------------------CreateNewPasswordPage Right part end------------------------ */}
                    {/* -------------------------------------------Sign in Right part--------------------------------------- */}

                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage

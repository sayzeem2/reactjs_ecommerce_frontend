import React from 'react'
import "./SignUpPage.css"
import { useNavigate } from 'react-router-dom'
import LogoImg from '../assets/Aurora_logo.svg'
import { ShoppingCartOutlined, FavoriteBorderOutlined, VisibilityOff, Google, X, Search } from '@mui/icons-material'


function SignUpPage() {
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
    <div className='signup-page-main'>
      {/* -------------------------------------------navbar part------------------------------------------------------ */}
      <nav className="signup-nav-guest-container">
        <img src={LogoImg} alt="Logo" className='signup-nav-guest-image-main-container' onClick={goToSignIn} />
        <div className='signup-nav-guest-links-main-container'>
          <div className='signup-nav-guest-links-content-container'>
            <span className='signup-nav-guest-links-span' onClick={goToAboutPage}>About Us</span>
          </div>
          <div className='signup-nav-guest-links-content-container'>
            <span className='signup-nav-guest-links-span' onClick={goToContactPage}>Contact Us</span>
          </div>
          <div className='signup-nav-guest-links-content-container'>
            <span className='signup-nav-guest-links-span' onClick={goToFaqPage}>FAQ's</span>
          </div>
          <div className='signup-nav-guest-links-content-container'>
            <span className='signup-nav-guest-links-span' onClick={goToTermsPage}>Terms</span>
          </div>

        </div>
        <div className='signup-nav-search-container'>
          {/* <a href="#" className='signup-nav-search-img'></a> */}
          <input type="text" className='signup-nav-search-input' placeholder='Search' />
          <Search className='signup-nav-search-magnifier-img' />
        </div>
        <div className='signup-nav-signup-btn-container'>
          <button className='signup-nav-signup-btn' onClick={goToSignIn}>Sign In</button>
        </div>
        <div className='signup-nav-icons-container'>
          <div className='signup-nav-icons-content-container'>
            <div className='signup-nav-icons-wrapper'>
              <FavoriteBorderOutlined sx={{ fontSize: 30, color: 'var(--font-color)' }} />
            </div>

            <div className='signup-nav-icons-wrapper'>
              <ShoppingCartOutlined sx={{ fontSize: 30, color: 'var(--font-color)' }} />
            </div >
          </div>
        </div>
      </nav>

      {/* -------------------------------------------navbar part------------------------------------------------------ */}
      {/* -------------------------------------------Sign in Left part------------------------------------------------ */}
      <div>
        <div className='signup-mid-container'>
          <div className='signup-mid-left-image-container'>
            <div className='signup-mid-left-image-overlay'>
              <img src="https://i.pinimg.com/1200x/9b/ac/6f/9bac6f8595812c8410bac1e935dc304e.jpg"
                alt="left image"
                className='signup-mid-left-image'
              />
            </div>
          </div>
          {/* -------------------------------------------Sign in Left part----------------------------------------------- */}
          {/* -------------------------------------------Sign in Right part---------------------------------------------- */}
          <div className='signup-right-main-container'>
            <div className='signup-right-form-wrapper'>
              {/* -------------------------------------------Sign in H1 Start---------------------------------------- */}
              <div className='signup-right-heading-main-container'>
                <h1 className='signup-right-heading'>Sign Up</h1>
                <span className='signup-right-heading-info'>Sign up for free to access to in any of out products</span>
              </div>
              {/* -------------------------------------------Sign in H1 End------------------------------------------- */}
              {/* -------------------------------------------Sign in Buttons Start------------------------------------ */}
              <div className='signup-right-form-container'>
                <div className='signup-mid-right-form-social-buttons'>
                  <button className='signup-mid-right-form-social-btn-google-btn'>
                    <Google className="signup-mid-right-form-social-icon" />
                    Continue With Google
                  </button>
                  <button className='signup-mid-right-form-social-btn-twitter-btn'>
                    <X className="signup-mid-right-form-social-icon" />
                    Continue With X
                  </button>
                </div>
                {/* --------------------------------Sign in Buttons End------------------------------------ */}
                {/* --------------------------------Sign in Username,email input Start---------------------------------- */}
                <div className='signup-right-email-password-main-container'>
                  <label htmlFor="" className="signup-right-email-label">Email Address</label>
                  <input type="text" placeholder='' className='signup-right-email-input' />
                  <label htmlFor="" className='signup-right-email-error-message'>Error Message</label>
                </div>
                {/* --------------------------------Sign in Username,email input End---------------------------------- */}
                {/* --------------------------------Sign in password input Start---------------------------------- */}
                <div className='signup-right-password-container'>
                  <div className='signup-right-password-label-container'>
                    <label htmlFor="">Password</label>
                    <div className='signup-mid-right-hidden-container'>

                      <VisibilityOff className='signup-mid-hidden-img' />
                      <a href="#" className='signup-mid-hidden-label'>Hide</a>
                    </div>
                  </div>
                  <input type="text" placeholder='' className='signup-right-password-input' />
                  <div className='signup-right-mid-info-container'>
                    <span className='signup-right-mid-info'>Use 8 or more characters with a mix of letters,numbers & symbols</span>
                  </div>
                  <div className='signup-right-checkbox-container'>
                    <div className='signup-right-agree-subscribe-container'>
                      <input type="checkbox" className='signup-right-agree-text' />
                      <label htmlFor="">Agree to our <a href='#' onClick={goToTermsPage}>Terms of use</a> and <a href='#'>Privacy Policy</a></label>
                    </div>
                    <div className='signup-right-agree-subscribe-container'>

                      <input type="checkbox" className='signup-right-subscribe-text' />
                      <label htmlFor="">Subscribe to our monthly newsletter</label>
                    </div>
                  </div>
                  <div className='signup-right-button-container'>
                    <button className='signup-right-login-btn' onClick={goToSignIn}>Sign Up</button>
                    <a href='#' className='signup-right-signup-btn'>Already have an account? <span onClick={goToSignIn}>Log in</span></a>
                  </div>
                </div>
                {/* --------------------------------Sign in password input End---------------------------------- */}
              </div>
            </div>
          </div>
          {/* -------------------------------------------Sign in Right part--------------------------------------- */}

        </div>
      </div>
    </div>
  )
}

export default SignUpPage
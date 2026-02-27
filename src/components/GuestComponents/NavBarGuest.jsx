import { useNavigate } from "react-router-dom";
import './NavBarGuest.css'
import LogoImg from '../../assets/Aurora_logo.svg'

import { Search } from '@mui/icons-material'


const NavBarGuest = () => {
    const navigate = useNavigate();
    const goToSignIn = () => {
        navigate("/")
    }
    const goToAboutPage = () => {
        navigate("/about-us")
    }
    const goToSignUp = () => {
        navigate("/signup")
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
        // -------------------------------------------navbar part------------------------------------------------------ 
        <nav className="nav-guest-container">
            <img src={LogoImg} alt="Logo" className='nav-guest-image-main-container' onClick={goToSignIn} />
            <div className='nav-guest-links-main-container'>
                <div className='nav-guest-links-content-container'>
                    <span className='nav-guest-links-span' onClick={goToAboutPage}>About Us</span>
                </div>
                <div className='nav-guest-links-content-container'>
                    <span className='nav-guest-links-span' onClick={goToContactPage}>Contact Us</span>
                </div>
                <div className='nav-guest-links-content-container'>
                    <span className='nav-guest-links-span' onClick={goToFaqPage}>FAQ's</span>
                </div>
                <div className='nav-guest-links-content-container'>
                    <span className='nav-guest-links-span' onClick={goToTermsPage}>Terms</span>
                </div>

            </div>
            <div className='nav-guest-search-container'>
                <input type="text" className='nav-guest-search-input' placeholder='Search' />
                <Search className='nav-guest-search-magnifier-img' />
            </div>
            <div className='nav-guest-signup-btn-container'>
                <button className='nav-guest-signin-btn' onClick={goToSignIn}>Sign In</button>
                <button className='nav-guest-signup-btn' onClick={goToSignUp}>Sign Up</button>
            </div>
        </nav>

    )
}
// -------------------------------------------navbar part------------------------------------------------------

export default NavBarGuest
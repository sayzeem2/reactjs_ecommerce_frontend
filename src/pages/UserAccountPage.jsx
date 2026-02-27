import React, { useState } from 'react'
import './UserAccountPage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ContactDetailsPage from './ContactDetailsPage';
import signOutImage from '../assets/NoConnectionGreen.svg'
import AddAddressPage from './AddAddressPage';
import WishlistPage from './WishlistPage';
import UserOrdersPage from './UserOrdersPage';
import OrderDetailsPage from './OrderDetailsPage';
function UserAccountPage() {
    const navigate = useNavigate();
    const [linkVal, setLinkVal] = useState('personal')
    const [sideBarValue, setSideBarValue] = useState('info')
    const [showModal, setShowModal] = useState(false);
    const nameChange = 'Jhanvi'


    function handleLink(value) {
        setLinkVal(value)
    }
    function handleSideBarValue(value) {
        setSideBarValue(value)
    }

    const handleYes = () => {
        navigate("/")
    };
    const handleNo = () => {
        setShowModal(false);
    };
    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------------------------ */}
            {/* -------------------------------------------navbar part------------------------------------------------------ */}

            <NavBar />
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/* -------------------------------------------Mid part start------------------------------------------------------ */}
            <div className='contact-details-page-main-container'>
                <div className='contact-details-page-content-container'>
                    <div className='contact-details-navigation-links-container'>
                        <a href="#" className={linkVal === 'home' ? 'contact-details-navigation-links-active' : 'contact-details-navigation-links'} onClick={() => handleLink('home')}>Home</a><KeyboardArrowRightIcon sx={{ color: '#807D7E', mx: '7px' }} />
                        <a href="#" className={linkVal === 'account' ? 'contact-details-navigation-links-active' : 'contact-details-navigation-links'} onClick={() => handleLink('account')}>My Account</a><KeyboardArrowRightIcon sx={{ color: '#807D7E', mx: '7px' }} />
                        <a href="#" className={linkVal === 'personal' ? 'contact-details-navigation-links-active' : 'contact-details-navigation-links'} onClick={() => handleLink('personal')}>Personal Info</a>
                    </div>
                    <div className='contact-details-content-main-container'>
                        {/* -------------------------------Left Main Container Start------------------------------------------------- */}
                        <div className='contact-details-left-main-container'>
                            <div className='contact-details-left-heading-main-container'>
                                <div className='contact-details-left-heading-container'>
                                    <div className='contact-details-left-heading-box'></div>
                                    <span className='contact-details-left-heading-text'>Hello {nameChange}</span>
                                </div>
                                <span className='contact-details-left-heading-text-info'>Welcome to your Account</span>
                            </div>
                            <div className='contact-details-left-sidebar-main-container'>
                                <div onClick={() => handleSideBarValue('order')} className={sideBarValue === 'order' ? 'contact-details-left-sidebar-order-button-container-active' : 'contact-details-left-sidebar-order-button-container'}>
                                    <LocalMallOutlinedIcon />
                                    <span className='contact-details-left-sidebar-order-button'>My orders</span>
                                </div>
                                <div onClick={() => handleSideBarValue('wishlist')} className={sideBarValue === 'wishlist' ? 'contact-details-left-sidebar-wishlist-button-container-active' : 'contact-details-left-sidebar-wishlist-button-container'}>
                                    <FavoriteBorderOutlinedIcon />
                                    <span className='contact-details-left-sidebar-wishlist-button'>Wishlist</span>
                                </div>
                                <div onClick={() => handleSideBarValue('info')} className={sideBarValue === 'info' ? 'contact-details-left-sidebar-info-button-container-active' : 'contact-details-left-sidebar-info-button-container'}>
                                    < PersonOutlineOutlinedIcon />
                                    <span className='contact-details-left-sidebar-info-button'>My info</span>
                                </div>
                                <div onClick={() => setShowModal(true)} className={sideBarValue === 'signout' ? 'contact-details-left-sidebar-signout-button-container-active' : 'contact-details-left-sidebar-signout-button-container'}>
                                    <ExitToAppOutlinedIcon />
                                    <span className='contact-details-left-sidebar-signout-button'>Sign out</span>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------Left Main Container End------------------------------------------------- */}
                        {/* -------------------------------Right Main Container Start------------------------------------------------- */}

                        {sideBarValue === 'order' && (
                            <div className='contact-details-right-main-container'>
                                <UserOrdersPage setSideBarValue={setSideBarValue} />
                            </div>
                        )}

                        {sideBarValue === 'orderDetails' && (
                            <div className='contact-details-right-main-container'>
                                <OrderDetailsPage setSideBarValue={setSideBarValue} />
                            </div>
                        )}

                        {sideBarValue === 'wishlist' && <div className='contact-details-right-main-container'>
                            <WishlistPage />
                        </div>}


                        {sideBarValue === 'info' && (
                            <div className='contact-details-right-main-container'>
                                <ContactDetailsPage setSideBarValue={setSideBarValue} />
                            </div>
                        )}

                        {sideBarValue === 'addAddress' && (
                            <div className='contact-details-right-main-container'>
                                <AddAddressPage setSideBarValue={setSideBarValue} />
                            </div>
                        )}
                        {/* ------------------------------------Modal Window for Sign Out Start----------------------------------------------------------------- */}
                        {showModal && (
                            <div className="signout-modal-background-overlay">
                                <div className="signout-modal-main-box-container">
                                    <div className='signout-modal-image-container'>
                                        <img src={signOutImage} alt="Sign Out" className='signout-modal-image-container' />
                                    </div>
                                    <div className='signout-modal-main-heading-container'>
                                        <span className='signout-modal-main-heading-text'>Disconnecting from Style?</span>
                                        <span className='signout-modal-main-heading-info'>Are you sure you want to sign out?</span>
                                    </div>
                                    <div className="signout-modal-main-button-container">
                                        <button className="signout-modal-yes-button" onClick={handleYes}>
                                            Yes
                                        </button>
                                        <button className="signout-modal-no-button" onClick={handleNo}>
                                            No
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------Modal Window for Sign Out End----------------------------------------------------------------- */}

                        {/* -------------------------------Right Main Container End------------------------------------------------- */}

                    </div>
                </div>
            </div>


            {/* -------------------------------------------Mid part End------------------------------------------------------ */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div >
    )
}

export default UserAccountPage












































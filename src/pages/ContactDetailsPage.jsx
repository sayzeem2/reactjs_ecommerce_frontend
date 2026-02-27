import React, { useState } from 'react'
import './ContactDetailsPage.css'
import AddAddressPage from './AddAddressPage';
import { useNavigate } from 'react-router-dom'

function ContactDetailsPage({ setSideBarValue }) {
    const navigate = useNavigate();
    const [linkVal, setLinkVal] = useState('personal')
    const nameChange = 'Jhanvi'

    // const goToHomePage = () => {
    //     navigate("/home-page")
    // }

    const addresses = [
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: true,
            isHome: 'Home',
            isDefault: false,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: true,
            isHome: 'Home',
            isDefault: false,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: false,
            isHome: 'Office',
            isDefault: true,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: 'L/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: false,
            isHome: 'Home2',
            isDefault: true,
        },
    ];

    return (
        <div>
            {/* -------------------------------------------Mid part start------------------------------------------------------ */}
            <div className='contact-details-right-switch-container'>
                <span className='contact-details-right-heading-info-text'>My Info</span>
                <span className='contact-details-right-heading-contact-text'>Contact Details</span>

                <div className='contact-details-right-name-main-container'>
                    <span className='contact-details-right-name-span'>Your Name</span>
                    <div className='contact-details-right-name-input-btn-container'>
                        <input type="text" placeholder='Jhanvi Shah' className='contact-details-right-name-input' />
                        <span className='contact-details-right-name-btn'>Change</span>
                    </div>
                    <hr className='contact-details-right-divider-hr' />
                </div>
                <div className='contact-details-right-email-main-container'>
                    <span className='contact-details-right-email-span'>Email Address</span>
                    <div className='contact-details-right-email-input-btn-container'>
                        <input type="email" placeholder='Jhanvi@gmail.com' className='contact-details-right-email-input' />
                        <span className='contact-details-right-email-btn'>Change</span>
                    </div>
                    <hr className='contact-details-right-divider-hr' />
                </div>
                <div className='contact-details-right-phone-main-container'>
                    <span className='contact-details-right-phone-span'>Phone Number</span>
                    <div className='contact-details-right-phone-input-btn-container'>
                        <input type="number" placeholder='8980252445' className='contact-details-right-phone-input' />
                        <span className='contact-details-right-phone-btn'>Change</span>
                    </div>
                    <hr className='contact-details-right-divider-hr' />
                </div>
                <div className='contact-details-right-password-main-container'>
                    <span className='contact-details-right-password-span'>Password</span>
                    <div className='contact-details-right-password-input-btn-container'>
                        <input type="password" placeholder='*********' className='contact-details-right-password-input' />
                        <span className='contact-details-right-password-btn'>Change</span>
                    </div>
                    <hr className='contact-details-right-divider-hr' />
                </div>
                <div className='contact-details-right-address-main-container'>
                    <span className='contact-details-right-address-heading'>Address</span>
                    <span className='contact-details-right-address-new-btn' onClick={() => setSideBarValue('addAddress')}>Add New</span>
                </div>
                <div className='contact-details-right-address-box-main-container'>
                    {addresses.slice(0, 4).map((item, index) => (
                        <div className='contact-details-right-address-box-container' key={index}>
                            <div className='contact-details-right-address-box-content-container'>
                                <span className='contact-details-right-address-box-name-span'>{item.name}</span>
                                <span className='contact-details-right-address-box-phone-span'>{item.phone}</span>
                                <span className='contact-details-right-address-box-address-span'>{item.address}</span>
                                <div className='contact-details-right-address-box-home-button-container'>
                                    <button className='contact-details-right-address-box-home-button'>{item.isHome}</button>
                                    {item.isBilling ? <button className='contact-details-right-address-box-billing-button'>Default billing address</button> : null}
                                </div>
                                <div className='contact-details-right-address-box-remove-button-container'>
                                    <button className='contact-details-right-address-box-remove-button'>Remove</button>
                                    <button className='contact-details-right-address-box-edit-button'>Edit</button>
                                    {item.isDefault ? <button className='contact-details-right-address-box-default-button'>Set as default</button> : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* -------------------------------------------Mid part End------------------------------------------------------ */}
        </div >
    )
}

export default ContactDetailsPage
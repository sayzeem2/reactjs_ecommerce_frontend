import React, { useState } from 'react'
import './AddAddressPage.css'
// import { useNavigate } from 'react-router-dom'

function AddAddressPage({ setSideBarValue }) {
    // const navigate = useNavigate();
    const [linkVal, setLinkVal] = useState('personal')
    const nameChange = 'Jhanvi'

    // const goToHomePage = () => {
    //     navigate("/home-page")
    // }
    const handleCancel = () => {
        setSideBarValue('info'); // go back to My Info page
    };
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
            <div className='add-address-right-switch-container'>
                {/* ---------------------------------------Heading Part Start------------------------------------------------------- */}

                <span className='add-address-right-heading-info-text'>My Info</span>
                <span className='add-address-right-heading-contact-text'>Add Address</span>

                {/* ---------------------------------------Heading Part End------------------------------------------------------- */}

                {/* ---------------------------------------Right Input Start------------------------------------------------------- */}

                <div className='add-address-right-input-main-container'>
                    {/* ---------------------------------------Right Input FirstName Start------------------------------------------------------- */}

                    <div className='add-address-right-firstname-container'>
                        <span className='add-address-right-firstname-span'>First Name*</span>
                        <input type='text' placeholder='First Name' className='add-address-right-firstname-input' />
                    </div>
                    {/* ---------------------------------------Right Input FirstName End------------------------------------------------------- */}
                    {/* ---------------------------------------Right Input LastName Start------------------------------------------------------- */}

                    <div className='add-address-right-lastname-container'>
                        <span className='add-address-right-lastname-span'>Last Name*</span>
                        <input type='text' placeholder='Last Name' className='add-address-right-lastname-input' />
                    </div>
                    {/* ---------------------------------------Right Input LastName End------------------------------------------------------- */}

                    <div className='add-address-right-country-container'>
                        <span className='add-address-right-country-span'>Country / Region*</span>
                        <input type='text' placeholder='Country / Region' className='add-address-right-country-input' />
                    </div>
                    <div className='add-address-right-company-container'>
                        <span className='add-address-right-company-span'>Company Name</span>
                        <input type='text' placeholder='Company (optional)' className='add-address-right-company-input' />
                    </div>
                    <div className='add-address-right-street-container'>
                        <span className='add-address-right-street-span'>Street Address*</span>
                        <input type='text' placeholder='House number and street name' className='add-address-right-street-input' />
                    </div>
                    <div className='add-address-right-apartment-container'>
                        <span className='add-address-right-apartment-span'>Apt, suite, unit</span>
                        <input type='text' placeholder='apartment, suite, unit, etc (optional)' className='add-address-right-apartment-input' />
                    </div>
                    <div className='add-address-right-city-container'>
                        <span className='add-address-right-city-span'>City*</span>
                        <input type='text' placeholder='Town / City' className='add-address-right-city-input' />
                    </div>
                    <div className='add-address-right-state-container'>
                        <span className='add-address-right-state-span'>State*</span>

                        <select name="state" id="state" className='add-address-right-state-dropdown' defaultValue="">
                            <option value="" disabled>State</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="kerala">Kerala</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="goa">Goa</option>
                        </select>
                    </div>
                    <div className='add-address-right-phone-container'>
                        <span className='add-address-right-phone-span'>Phone*</span>
                        <input type='text' placeholder='Phone' className='add-address-right-phone-input' />
                    </div>
                    <div className='add-address-right-postal-container'>
                        <span className='add-address-right-postal-span'>Postal Code*</span>
                        <input type='text' placeholder='Postal Code' className='add-address-right-postal-input' />
                    </div>
                    <div className='add-address-right-delivery-container'>
                        <span className='add-address-right-delivery-span'>Delivery Instruction</span>
                        <textarea className='add-address-right-delivery-input' placeholder='Delivery Instruction' />
                    </div>
                    <div className='add-address-right-checkbox-main-container'>
                        <div className='add-address-right-checkbox-content-container'>
                            <input type='checkbox' name='shipping' id='shipping' className='add-address-right-address-checkbox' />
                            <label htmlFor="shipping" value='shipping' className='add-address-right-address-label'>Set as default shipping address</label>

                        </div>
                        <div className='add-address-right-checkbox-content-container'>
                            <input type='checkbox' name='billing' id='billing' className='add-address-right-address-checkbox' />
                            <label htmlFor="billing" value='billing' className='add-address-right-address-label'>Set as default billing address</label>
                        </div>
                    </div>
                </div>
                <div className='add-address-right-button-main-container'>
                    <div className='add-address-right-save-button-container'>
                        <button className='add-address-right-save-button'>Save</button>
                    </div>
                    <div className='add-address-right-cancel-button-container'>
                        <button className='add-address-right-cancel-button' onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------Right Input End------------------------------------------------------- */}

        </div >
    )
}

export default AddAddressPage
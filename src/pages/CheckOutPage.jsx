import React, { useState } from 'react'
import "./CheckOutPage.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { TextField } from '@mui/material';

const CheckOutPage = () => {
    const [linkVal, setLinkVal] = useState('cart')
    function handleLink(value) {
        setLinkVal(value)
    }
    const cartItems = [

        {
            id: 1,
            title: 'Printed Red Half Kurti Set',
            color: 'Red',
            size: 'M',
            price: '119.00',
            shipping: 'Free',
            image: 'https://images.unsplash.com/photo-1768289222847-85d000729b7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjB8fHxlbnwwfHx8fHw%3D'
        },

        {
            id: 2,
            title: "Blue Salwar Kameez Set",
            color: 'Blue',
            size: 'L',
            price: '191.00',
            shipping: 'Free',
            image: 'https://images.unsplash.com/photo-1768289222309-23f768607538?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njh8fHxlbnwwfHx8fHw%3D'

        },

        {
            id: 3,
            title: 'Black Leaf Pattern Suit',
            color: 'Black',
            size: 'M',
            price: '119.00',
            shipping: '100.00',
            image: 'https://images.unsplash.com/photo-1764238385987-2ffa021755a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjgxfHx8ZW58MHx8fHx8'
        }
    ];

    const cartSubTotal = cartItems.reduce((total, item) => {
        const qty = item.id || 1;
        return total + qty * Number(item.price);
    }, 0);

    const shippingTotal = cartItems.reduce((total, item) => {
        if (item.shipping === 'Free') return total;
        return total + Number(item.shipping);
    }, 0);
    const savings = cartItems.length * 10;
    const grandTotal = cartSubTotal + shippingTotal - savings;
    return (
        <div>
            {/* -----------------------------------Navbar Part Start------------------------------------------- */}
            <NavBar />
            {/* -----------------------------------Navbar Part End------------------------------------------- */}
            <div className='checkout-main-full-page-container'>
                <div className='checkout-main-content-container'>
                    <div className='checkout-left-content-container'>
                        <div className='checkout-navigation-links-container'>
                            <a href="#" className={linkVal === 'home' ? 'checkout-navigation-links-active' : 'checkout-navigation-links'} onClick={() => handleLink('home')}>Home</a><KeyboardArrowRightIcon sx={{ color: '#807D7E', mx: '7px' }} />
                            <a href="#" className={linkVal === 'account' ? 'checkout-navigation-links-active' : 'checkout-navigation-links'} onClick={() => handleLink('account')}>My Account</a><KeyboardArrowRightIcon sx={{ color: '#807D7E', mx: '7px' }} />
                            <a href="#" className={linkVal === 'checkout' ? 'checkout-navigation-links-active' : 'checkout-navigation-links'} onClick={() => handleLink('checkout')}>Check Out</a>
                        </div>
                        <div className='checkout-left-main-text-container'>
                            <div className='checkout-left-purple-box'></div>
                            <span className='checkout-left-heading-text'>Check Out</span>

                        </div>
                        <div className='checkout-left-billing-text-container'>
                            <span className='checkout-left-billing-text'>Billing Details</span>
                        </div>
                        <div className='checkout-left-billing-input-main-container'>
                            <div className='checkout-left-billing-firstname-container'>
                                <span className='checkout-left-billing-firstname-span'>First Name*</span>
                                <input type='text' placeholder='First Name' className='checkout-left-billing-firstname-input' />
                            </div>
                            <div className='checkout-left-billing-lastname-container'>
                                <span className='checkout-left-billing-lastname-span'>Last Name*</span>
                                <input type='text' placeholder='Last Name' className='checkout-left-billing-lastname-input' />
                            </div>
                            <div className='checkout-left-billing-country-container'>
                                <span className='checkout-left-billing-country-span'>Country / Region*</span>
                                <input type='text' placeholder='Country / Region' className='checkout-left-billing-country-input' />
                            </div>
                            <div className='checkout-left-billing-company-container'>
                                <span className='checkout-left-billing-company-span'>Company Name</span>
                                <input type='text' placeholder='Company (optional)' className='checkout-left-billing-company-input' />
                            </div>
                            <div className='checkout-left-billing-street-container'>
                                <span className='checkout-left-billing-street-span'>Street Address*</span>
                                <input type='text' placeholder='House number and street name' className='checkout-left-billing-street-input' />
                            </div>
                            <div className='checkout-left-billing-apartment-container'>
                                <span className='checkout-left-billing-apartment-span'>Apt, suite, unit</span>
                                <input type='text' placeholder='apartment, suite, unit, etc (optional)' className='checkout-left-billing-apartment-input' />
                            </div>
                            <div className='checkout-left-billing-city-state-postal-container'>
                                <div className='checkout-left-billing-city-container'>
                                    <span className='checkout-left-billing-city-span'>City*</span>
                                    <input type='text' placeholder='Town / City' className='checkout-left-billing-city-input' />
                                </div>
                                <div className='checkout-left-billing-state-container'>
                                    <span className='checkout-left-billing-state-span'>State*</span>

                                    <select name="state" id="state" className='checkout-left-billing-state-dropdown' defaultValue="">
                                        <option value="" disabled>State</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="kerala">Kerala</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="goa">Goa</option>
                                    </select>
                                </div>
                                <div className='checkout-left-billing-postal-container'>
                                    <span className='checkout-left-billing-postal-span'>Postal Code*</span>
                                    <input type='text' placeholder='Postal Code' className='checkout-left-billing-postal-input' />
                                </div>
                            </div>
                            <div className='checkout-left-billing-phone-container'>
                                <span className='checkout-left-billing-phone-span'>Phone*</span>
                                <input type='text' placeholder='Phone' className='checkout-left-billing-phone-input' />
                            </div>

                        </div>
                        <div className='checkout-left-billing-continue-shopping-button-container'>
                            <button className='checkout-left-billing-continue-shopping-button'>Continue to delivery</button>
                        </div>
                        <div className='checkout-left-billing-save-info-container'>
                            <input type='checkbox' name='saveInfo' id='saveInfo' className='checkout-left-billing-save-info-checkbox' />
                            <label htmlFor="saveInfo" value='saveInfo' className='checkout-left-billing-save-info-label'>Save my information for a faster checkout</label>
                        </div>
                        <hr className='checkout-right-items-hr' />
                        <div className='checkout-left-shipping-address-main-container'>
                            <div className='checkout-left-shipping-address-content-container'>
                                <span className='checkout-left-shipping-address-span'>Shipping Address</span>
                                <span className='checkout-left-shipping-address-info'>Select the address that matches your card or payment method</span>
                                <div className='checkout-left-shipping-address-radio-main-container'>
                                    <div className='checkout-left-shipping-address-radio-content-container'>
                                        <div className='checkout-left-shipping-address-radio-billing-container'>
                                            <input type="radio" name="address" id="billingAdd" className='checkout-left-shipping-address-billing-input' defaultChecked />
                                            <label htmlFor="billingAdd" className='checkout-left-shipping-address-billing-label'>Same as Billing address</label>
                                        </div>
                                        <hr />
                                        <div className='checkout-left-shipping-address-radio-shipping-container'>
                                            <input type="radio" name="address" id="shippingAdd" className='checkout-left-shipping-address-shipping-input' />
                                            <label htmlFor="shippingAdd" className='checkout-left-shipping-address-shipping-label'>Use a different shipping address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='checkout-right-items-hr' />

                        <div className='checkout-left-shipping-method-main-container'>
                            <div className='checkout-left-shipping-method-content-container'>
                                <span className='checkout-left-shipping-method-span'>Shipping Method</span>
                                <div className='checkout-left-shipping-method-radio-main-container'>
                                    <div className='checkout-left-shipping-method-radio-content-container'>
                                        <div className='checkout-left-shipping-method-label-container'>
                                            <label htmlFor="arrival" className='checkout-left-shipping-method-billing-label'>Arrives by Monday, June 7</label>
                                        </div>
                                        <hr />
                                        <div className='checkout-left-shipping-method-radio-shipping-container'>
                                            <div className='checkout-left-shipping-method-label-container'>
                                                <label htmlFor="delivery" className='checkout-left-shipping-method-shipping-label'>Delivery Charges</label>
                                                <label htmlFor="price" className='checkout-left-shipping-method-shipping-label'>$5.0</label>
                                            </div>
                                            <span className='checkout-left-shipping-method-info'>Additional fees may apply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='checkout-right-items-hr' />

                        <div className='checkout-left-payment-method-main-container'>
                            <div className='checkout-left-payment-method-content-container'>
                                <span className='checkout-left-payment-method-span'>Payment Method</span>
                                <span className='checkout-left-payment-method-info'>All transactions are secure and encrypted</span>
                                <div className='checkout-left-payment-method-radio-main-container'>
                                    <div className='checkout-left-payment-method-radio-content-container'>
                                        <div className='checkout-left-payment-method-radio-billing-container'>
                                            <div className='checkout-left-payment-method-radio-cash-container'>
                                                <input type="radio" name="pay" id="cashOnDelivery" className='checkout-left-payment-method-billing-input' defaultChecked />
                                                <label htmlFor="cashOnDelivery" className='checkout-left-payment-method-billing-label'>Cash on Delivery</label>
                                            </div>
                                            <span className='checkout-left-payment-method-info-fees'>Pay with cash upon delivery</span>
                                        </div>
                                        <hr />
                                        <div className='checkout-left-payment-method-radio-shipping-container'>
                                            <input type="radio" name="pay" id="razorPay" className='checkout-left-payment-method-shipping-input' />
                                            <label htmlFor="razorPay" className='checkout-left-payment-method-shipping-label'>RazorPay</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='checkout-left-pay-btn-container'>
                            <button className='checkout-left-pay-btn'>Pay Now</button>
                        </div>
                    </div>


                    {/* -----------------------------------Rigth Side Start------------------------------------------- */}


                    <div className='checkout-right-main-container'>
                        <div className='checkout-right-content-container'>
                            <div className='checkout-right-content-wrapper-container'>
                                <div className='checkout-right-heading-container'>
                                    <span className='checkout-right-heading'>Order Summary</span>
                                </div>
                                <hr className='checkout-right-items-hr' />

                                <div>
                                    {cartItems.slice(0, 3).map((item) => (
                                        <div className='checkout-right-items-order-summary-main-container'>
                                            <div className='checkout-right-items-order-summary-container' key={item.id} >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="checkout-right-items-order-summary-image"
                                                />
                                                <div className="checkout-right-items-name-main-container">
                                                    <div className="checkout-right-items-name-container">
                                                        <span className="checkout-right-items-name-span">{item.title}
                                                            <span className="checkout-right-items-quantity-span"> x {item.id}</span>
                                                        </span>
                                                        <span className="checkout-right-items-color-name-span">Color :
                                                            <span className="checkout-right-items-color-span">{item.color}</span>
                                                        </span>
                                                    </div>
                                                    <span className='checkout-right-items-price-span'>${item.price}</span>
                                                </div>
                                            </div>
                                            <hr className='checkout-right-items-hr' />
                                        </div>
                                    ))}
                                </div>
                                <div className='checkout-right-subtotal-container'>
                                    <span className='checkout-right-maths-heading'>Subtotal
                                        <span className='checkout-right-maths-info'> ( {cartItems.length} Items )</span>
                                    </span>
                                    <span className='checkout-right-maths-heading'>${cartSubTotal.toFixed(2)}</span>
                                </div>
                                <div className='checkout-right-savings-container'>
                                    <span className='checkout-right-maths-heading'>Savings</span>
                                    <span className='checkout-right-maths-heading'>-${cartItems.length * 10}</span>
                                </div>
                                <hr className='checkout-right-items-hr' />
                                <div className='checkout-right-shipping-container'>
                                    <span className='checkout-right-maths-heading'>Shipping</span>
                                    <span className='checkout-right-maths-heading'>${shippingTotal.toFixed(2)}</span>
                                </div>
                                <hr className='checkout-right-items-hr' />
                                <div className='checkout-right-total-container'>
                                    <span className='checkout-right-maths-heading'>Total</span>
                                    <span className='checkout-right-maths-heading'>${grandTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -----------------------------------Rigth Side End------------------------------------------- */}

                </div>
            </div>
            {/* ----------------------------------------Footer Section Start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section End------------------------------------------ */}
        </div>
    )
}

export default CheckOutPage
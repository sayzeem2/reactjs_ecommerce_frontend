import React, { useState } from 'react'
import "./CartPage.css"
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import EmptyCart from './EmptyCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const CartPage = () => {
    const [linkVal, setLinkVal] = useState('cart')
    const [quantities, setQuantities] = useState({});


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
        const qty = quantities[item.id] || 1;
        return total + qty * Number(item.price);
    }, 0);

    const shippingTotal = cartItems.reduce((total, item) => {
        if (item.shipping === 'Free') return total;
        return total + Number(item.shipping);
    }, 0);
    const grandTotal = cartSubTotal + shippingTotal;

    const handleIncrease = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const handleDecrease = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) - 1)
        }));
    };

    function handleLink(value) {
        setLinkVal(value)
    }
    return (
        <div>
            {/* -----------------------------------Navbar Part Start------------------------------------------- */}
            <NavBar />
            {/* -----------------------------------Navbar Part End------------------------------------------- */}

            {/*+++++++++++++++++++++++++++++++++++++++Cart Main Section Start+++++++++++++++++++++++++++++++++++++++ */}
            <div className='cart-main-full-page-container'>

                {cartItems.length > 0 ?
                    <div className='cart-main-switch-parent-container'>
                        <div className='cart-main-content-container'>
                            {/* ----------------------------------------Cart Navigation Login Start------------------------------------------ */}

                            <div className='cart-navigation-links-container'>
                                <a href="#" className={linkVal === 'home' ? 'cart-navigation-links-active' : 'cart-navigation-links'} onClick={() => handleLink('home')}>Home</a><KeyboardArrowRightIcon sx={{ color: '#807D7E', mx: '7px' }} />
                                <a href="#" className={linkVal === 'cart' ? 'cart-navigation-links-active' : 'cart-navigation-links'} onClick={() => handleLink('cart')}>Add To Cart</a>
                            </div>
                            <div className='cart-login-text-container'>
                                <span>Please fill in the fields below and click place order to complete your purchase!</span>
                                <span>Already registered? <a href='#' className='cart-login-text-login-link'>Please login here</a></span>
                            </div>
                        </div>
                        {/* ----------------------------------------Cart Navigation Login End------------------------------------------ */}
                        {/* ----------------------------------------Cart Header Section Start------------------------------------------ */}
                        <div className='cart-header-main-container'>
                            <div className='cart-header-content-container'>

                                <span className='cart-header-product-details'>PRODUCT DETAILS</span>
                                <span className='cart-header-product-price'>PRICE</span>
                                <span className='cart-header-product-quantity'>QUANTITY</span>
                                <span className='cart-header-product-shiiping'>SHIPPING</span>
                                <span className='cart-header-product-subtotal'>SUBTOTAL</span>
                                <span className='cart-header-product-action'>ACTION</span>
                            </div>
                        </div>
                        {/* ----------------------------------------Cart Header Section End------------------------------------------ */}
                        {/* ----------------------------------------Cart items Section Start------------------------------------------ */}
                        <div className='cart-items-main-container'>
                            <div className='cart-items-content-container'>
                                {cartItems.slice(0, 3).map((item) => (
                                    <div className='cart-items-product-main-container'>
                                        <div className='cart-items-product-details-container' key={item.id} >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="cart-items-product-details-image"
                                            />
                                            <div className="cart-items-product-details-info-container">
                                                <div className="cart-items-product-details-info">
                                                    <span className="cart-items-product-details-heading">{item.title}</span>
                                                    <span className="cart-items-product-details-color">Color: {item.color}</span>
                                                    <span className="cart-items-product-details-size">Size: {item.size}</span>

                                                </div>
                                            </div>
                                            <div className='cart-items-product-price-main-container'>
                                                <span>{`$${item.price}`}</span>
                                            </div>
                                            <div className='cart-items-product-quantity-main-container'>
                                                <div className='cart-items-product-quantity-counter-container'>
                                                    <button
                                                        className='cart-items-product-quantity-counter-decrease-btn'
                                                        onClick={() => handleDecrease(item.id)}
                                                        disabled={(quantities[item.id] || 1) === 1}>-</button>
                                                    <input type="text" disabled value={quantities[item.id] || 1} className='cart-items-product-quantity-counter-input' />
                                                    <button
                                                        className='cart-items-product-quantity-counter-increase-btn'
                                                        onClick={() => handleIncrease(item.id)}
                                                    >+</button>
                                                </div>
                                            </div>
                                            <div className='cart-items-product-shipping-main-container'>
                                                <span>{item.shipping === 'Free' ? `${item.shipping}` : `$${item.shipping}`}</span>
                                            </div>
                                            <div className='cart-items-product-subtotal-main-container'>
                                                <span>${`$${((quantities[item.id] || 1) * Number(item.price)).toFixed(2)}`}</span>
                                            </div>
                                            <div className='cart-items-product-action-main-container'>
                                                <IconButton aria-label="delete">
                                                    <DeleteOutlineIcon sx={{ color: '#8a33fd', fontSize: '32px' }} />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="cart-items-product-hr"></div>
                                    </div>

                                ))}
                            </div>
                        </div>
                        {/* ----------------------------------------Cart items Section End------------------------------------------ */}
                        {/* ----------------------------------Cart Discount and Total Section Start---------------------------------- */}
                        <div className='cart-discount-total-main-container'>
                            <div className='cart-discount-total-main-content-container'>
                                <div className='cart-discount-main-container'>
                                    <div className='cart-discount-text-container'>
                                        <span className='cart-discount-code-text'>Discount Codes</span>
                                        <span className='cart-discount-code-text-enter'>Enter your coupon code if you have one</span>
                                    </div>
                                    <div className='cart-discount-input-container'>
                                        <input type="text" className='cart-discount-input' />
                                        <button className='cart-discount-input-button'>Apply Coupon</button>
                                    </div>
                                    <div className='cart-discount-continue-shopping-container'>
                                        <button className='cart-discount-continue-shopping-button'>Continue Shopping</button>
                                    </div>
                                </div>
                                <div className='cart-total-main-container'>

                                    <div className='cart-total-upper-container'>
                                        <div className='cart-total-upper-left-container'>
                                            <span className='cart-total-sub-total'>Sub Total</span>
                                            <span className='cart-total-shipping'>Shipping</span>
                                            <span className='cart-total-grand-total'>Grand Total</span>
                                        </div>
                                        <div className='cart-total-upper-right-container'>
                                            <span className='cart-total-sub-total'>${cartSubTotal.toFixed(2)}</span>
                                            <span className='cart-total-shipping'>${shippingTotal.toFixed(2)}</span>
                                            <span className='cart-total-grand-total'>${grandTotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className='cart-total-lower-container'>
                                        <button className='cart-total-checkout-button'>Proceed To Checkout</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> : <EmptyCart />}

                {/* ----------------------------------Cart Discount and Total Section End---------------------------------- */}
            </div>


            {/* ++++++++++++++++++++++++++++++++++++++++++++Cart Main Section End+++++++++++++++++++++++++++++++++++++++ */}

            {/* ----------------------------------------Footer Section Start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section End------------------------------------------ */}
        </div >
    )
}

export default CartPage
import React from 'react'
import './WishlistPage.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EmptyWishlistPage from './EmptyWishlistPage';
const WishlistPage = () => {
    const orderDetailsActive = [
        {
            id: 1,
            orderNumber: '#123456789',
            orderDate: '2 June 2023, 2:40 PM',
            deliveryDate: '8 June 2023',
            orderStatus: 'In progress',
            payment: 'Cash On Delivery',
            title: 'Printed Red Half Kurti Set',
            color: 'Red',
            quantity: 1,
            total: '119.00',
            image: 'https://images.unsplash.com/photo-1768289222847-85d000729b7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjB8fHxlbnwwfHx8fHw%3D'

        },
        {
            id: 2,
            orderNumber: '#987654321',
            orderDate: '2 June 2023, 1:30 PM',
            deliveryDate: '7 June 2023',
            orderStatus: 'Shipped',
            payment: 'Cash On Delivery',
            title: "Blue Salwar Kameez Set",
            color: 'Blue',
            quantity: 1,
            total: '191.00',
            image: 'https://images.unsplash.com/photo-1768289222309-23f768607538?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njh8fHxlbnwwfHx8fHw%3D'
        },
        {
            id: 3,
            orderNumber: '#192837465',
            orderDate: '2 June 2023, 6:30 PM',
            deliveryDate: '9 June 2023',
            orderStatus: 'In progress',
            payment: 'RazorPay',
            title: 'Black Leaf Pattern Suit',
            color: 'Black',
            quantity: 1,
            total: '200.00',
            image: 'https://images.unsplash.com/photo-1764238385987-2ffa021755a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjgxfHx8ZW58MHx8fHx8'

        },

    ];

    return (
        <div>
            {orderDetailsActive.length > 0 ? <div>
                <span className='wishlist-right-heading-info-text'>Wishlist</span>
                {orderDetailsActive.slice(0, 4).map((item, index) => (
                    <div className='wishlist-right-active-main-container'>

                        {/* -----------------------white part start--------------------------------------------- */}
                        <div className='wishlist-right-active-product-main-container'>
                            <div className='wishlist-right-active-product-image-wrapper'>
                                <div className='wishlist-right-close-button-container'>
                                    <CloseOutlinedIcon />
                                </div>
                                <img src={item.image}
                                    alt={item.title}
                                    className='wishlist-right-active-product-image'
                                />
                                <div className='wishlist-right-active-product-details-main-container'>
                                    <div className='wishlist-right-active-product-details-content-container'>
                                        <span className='wishlist-right-active-product-details-title'>{item.title}</span>
                                        <span className='wishlist-right-active-product-details-color-wrapper'>Colour :
                                            <span className='wishlist-right-active-product-details-color'> {item.color}</span>
                                        </span>
                                        <span className='wishlist-right-active-product-details-qty-wrapper'>Quantity :
                                            <span className='wishlist-right-active-product-details-qty'> {item.quantity}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className='wishlist-right-active-product-details-total'> ${item.total}</span>
                                    </div>
                                    <button className='wishlist-right-active-product-details-detail-btn'>Add to cart</button>
                                </div>
                            </div>
                            <hr className='wishlist-right-divider-hr' />
                        </div>


                        {/* -----------------------white part start--------------------------------------------- */}
                    </div>

                ))}
            </div> : <EmptyWishlistPage />}

        </div>
    )
}

export default WishlistPage
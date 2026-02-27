import React from 'react'
import './ActiveTab.css'
const ActiveTab = ({ setSideBarValue }) => {
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
            {orderDetailsActive.slice(0, 4).map((item, index) => (
                <div className='user-orders-right-active-main-container'>
                    {/* -----------------------grey part start--------------------------------------------- */}
                    <div className='user-orders-right-active-grey-main-container' key={index}>
                        <span className='user-orders-right-active-order-number-span'>Order no: {item.orderNumber}</span>
                        <div className='user-orders-right-active-order-date-status-container'>
                            <span className='user-orders-right-active-order-date-span-wrapper'>Order Date :
                                <span className='user-orders-right-active-order-date-span'> {item.orderDate}</span>
                            </span>
                            <span className='user-orders-right-active-order-status-span-wrapper'>Order Status :
                                <span className='user-orders-right-active-order-status-span'> {item.orderStatus}</span>
                            </span>
                        </div>
                        <div className='user-orders-right-active-delivery-date-payment-container'>
                            <span className='user-orders-right-active-delivery-date-span-wrapper'>Estimated Delivery Date :
                                <span className='user-orders-right-active-delivery-date-span'> {item.deliveryDate}</span>
                            </span>
                            <span className='user-orders-right-active-payment-span-wrapper'>Payment Method :
                                <span className='user-orders-right-active-payment-span'> {item.payment}</span>
                            </span>
                        </div>
                    </div>
                    {/* -----------------------grey part end--------------------------------------------- */}

                    {/* -----------------------white part start--------------------------------------------- */}
                    <div className='user-orders-right-active-product-main-container'>
                        <div className='user-orders-right-active-product-image-wrapper'>
                            <img src={item.image}
                                alt={item.title}
                                className='user-orders-right-active-product-image'
                            />
                            <div className='user-orders-right-active-product-details-main-container'>
                                <div className='user-orders-right-active-product-details-content-container'>
                                    <span className='user-orders-right-active-product-details-title'>{item.title}</span>
                                    <span className='user-orders-right-active-product-details-color-wrapper'>Colour :
                                        <span className='user-orders-right-active-product-details-color'> {item.color}</span>
                                    </span>
                                    <span className='user-orders-right-active-product-details-qty-wrapper'>Qty :
                                        <span className='user-orders-right-active-product-details-qty'> {item.quantity}</span>
                                    </span>
                                    <span className='user-orders-right-active-product-details-total-wrapper'>Total :
                                        <span className='user-orders-right-active-product-details-total'> ${item.total}</span>
                                    </span>
                                </div>
                                <button
                                    className='user-orders-right-active-product-details-detail-btn'
                                    onClick={() => setSideBarValue('orderDetails')}
                                >
                                    View Detail
                                </button>
                            </div>
                        </div>
                        <hr className='user-orders-right-divider-hr' />
                    </div>

                    {/* -----------------------white part start--------------------------------------------- */}
                </div>

            ))}


        </div>
    )
}

export default ActiveTab
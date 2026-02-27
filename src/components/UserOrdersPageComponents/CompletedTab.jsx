import React from 'react'
import './CompletedTab.css'
const CompletedTab = () => {
    const orderDetailsCompleted = [
        {
            id: 1,
            orderNumber: '#543219876',
            orderDate: '16 January 2024, 4:05 PM',
            deliveryDate: '25 October 2025',
            orderStatus: 'Delivered',
            paymentMethod: 'Cash on delivery',
            title: "Classic Karma Prints Suit",
            brand: "Yuzee's Brand",
            quantity: 1,
            total: '337.00',
            image: 'https://images.unsplash.com/photo-1768982596880-67459057a9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fHw%3D'
        },
        {
            id: 2,
            orderNumber: '#678912345',
            orderDate: '15 April 2023, 11:30 AM',
            deliveryDate: '7 April 2023',
            orderStatus: 'Delivered',
            paymentMethod: 'RazorPay',
            title: 'Multi-Colored Printed Top And Pants',
            brand: "Sana's Brand",
            quantity: 1,
            total: '223.00',
            image: 'https://images.unsplash.com/photo-1767428827715-e5bad0f9a98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoZXMlMjBtb2RlbCUyMHdvbWVufGVufDB8fDB8fHww'
        },
        {
            id: 3,
            orderNumber: '#124365879',
            orderDate: '21 April 2025, 1:30 PM',
            deliveryDate: '27 April 2025',
            orderStatus: 'Delivered',
            paymentMethod: 'Cash on delivery',
            title: "Blue Border Printed Jump Suit",
            brand: "Jhanvi's Brand",
            quantity: 2,
            total: '510.00',
            image: 'https://images.unsplash.com/photo-1766994063823-0dfa11c17d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTY0fHx8ZW58MHx8fHx8'
        },


    ];


    return (
        <div>
            {orderDetailsCompleted.slice(0, 3).map((item, index) => (
                <div className='user-orders-right-completed-main-container'>
                    {/* -----------------------grey part start--------------------------------------------- */}
                    <div className='user-orders-right-completed-grey-main-container' key={index}>
                        <span className='user-orders-right-completed-order-number-span'>Order no: {item.orderNumber}</span>
                        <div className='user-orders-right-completed-order-date-status-container'>
                            <span className='user-orders-right-completed-order-date-span-wrapper'>Order Date :
                                <span className='user-orders-right-completed-order-date-span'> {item.orderDate}</span>
                            </span>
                            <span className='user-orders-right-completed-order-status-span-wrapper'>Order Status :
                                <span className='user-orders-right-completed-order-status-span'> {item.orderStatus}</span>
                            </span>
                        </div>
                        <div className='user-orders-right-completed-delivery-date-payment-container'>
                            <span className='user-orders-right-completed-delivery-date-span-wrapper'>Delivery Date :
                                <span className='user-orders-right-completed-delivery-date-span'> {item.deliveryDate}</span>
                            </span>
                            <span className='user-orders-right-completed-payment-span-wrapper'>Payment Method :
                                <span className='user-orders-right-completed-payment-span'> {item.paymentMethod}</span>
                            </span>
                        </div>
                    </div>
                    {/* -----------------------grey part end--------------------------------------------- */}

                    {/* -----------------------white part start--------------------------------------------- */}
                    <div className='user-orders-right-completed-product-main-container'>
                        <div className='user-orders-right-completed-product-image-wrapper'>
                            <img src={item.image}
                                alt={item.title}
                                className='user-orders-right-completed-product-image'
                            />
                            <div className='user-orders-right-completed-product-details-main-container'>
                                <div className='user-orders-right-completed-product-details-content-container'>
                                    <span className='user-orders-right-completed-product-details-title'>{item.title}</span>
                                    <span className='user-orders-right-completed-product-details-color-wrapper'>Brand :
                                        <span className='user-orders-right-completed-product-details-color'> {item.brand}</span>
                                    </span>
                                    <span className='user-orders-right-completed-product-details-qty-wrapper'>Qty :
                                        <span className='user-orders-right-completed-product-details-qty'> {item.quantity}</span>
                                    </span>
                                    <span className='user-orders-right-completed-product-details-total-wrapper'>Total :
                                        <span className='user-orders-right-completed-product-details-total'> ${item.total}</span>
                                    </span>
                                </div>
                                <button className='user-orders-right-completed-product-details-detail-btn'>View Detail</button>
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

export default CompletedTab
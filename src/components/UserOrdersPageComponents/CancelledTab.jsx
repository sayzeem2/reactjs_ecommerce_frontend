import React from 'react'
import './CancelledTab.css'
const CancelledTab = () => {
    const orderDetailsCancelled = [
        {
            id: 1,
            orderNumber: '#192837465',
            orderDate: '1 May 2023, 9:40 PM',
            refundDate: '8 May 2023',
            orderStatus: 'Cancelled',
            refund: 'Cash Return',
            title: "Pink Floral Prints Kurti Suit",
            color: 'Pink',
            quantity: 1,
            total: '133.00',
            image: 'https://images.unsplash.com/photo-1763719161844-2552a01d929f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzIzfHx8ZW58MHx8fHx8'

        },
        {
            id: 2,
            orderNumber: '#918273645',
            orderDate: '1 April 2023, 11:30 AM',
            refundDate: '7 April 2023',
            orderStatus: 'Cancelled',
            refund: 'RazorPay',
            title: 'Yellow Floral Casual Suit',
            color: 'Yellow',
            quantity: 2,
            total: '300.00',
            image: 'https://images.unsplash.com/photo-1766471524198-055f1fdc555d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTkzfHx8ZW58MHx8fHx8'
        },


    ];

    return (
        <div>
            {orderDetailsCancelled.slice(0, 3).map((item, index) => (
                <div className='user-orders-right-cancelled-main-container'>
                    {/* -----------------------grey part start--------------------------------------------- */}
                    <div className='user-orders-right-cancelled-grey-main-container' key={index}>
                        <span className='user-orders-right-cancelled-order-number-span'>Order no: {item.orderNumber}</span>
                        <div className='user-orders-right-cancelled-order-date-status-container'>
                            <span className='user-orders-right-cancelled-order-date-span-wrapper'>Order Date :
                                <span className='user-orders-right-cancelled-order-date-span'> {item.orderDate}</span>
                            </span>
                            <span className='user-orders-right-cancelled-order-status-span-wrapper'>Order Status :
                                <span className='user-orders-right-cancelled-order-status-span'> {item.orderStatus}</span>
                            </span>
                        </div>
                        <div className='user-orders-right-cancelled-delivery-date-payment-container'>
                            <span className='user-orders-right-cancelled-delivery-date-span-wrapper'>Refund Date :
                                <span className='user-orders-right-cancelled-delivery-date-span'> {item.refundDate}</span>
                            </span>
                            <span className='user-orders-right-cancelled-payment-span-wrapper'>Refund Method :
                                <span className='user-orders-right-cancelled-payment-span'> {item.refund}</span>
                            </span>
                        </div>
                    </div>
                    {/* -----------------------grey part end--------------------------------------------- */}

                    {/* -----------------------white part start--------------------------------------------- */}
                    <div className='user-orders-right-cancelled-product-main-container'>
                        <div className='user-orders-right-cancelled-product-image-wrapper'>
                            <img src={item.image}
                                alt={item.title}
                                className='user-orders-right-cancelled-product-image'
                            />
                            <div className='user-orders-right-cancelled-product-details-main-container'>
                                <div className='user-orders-right-cancelled-product-details-content-container'>
                                    <span className='user-orders-right-cancelled-product-details-title'>{item.title}</span>
                                    <span className='user-orders-right-cancelled-product-details-color-wrapper'>Colour :
                                        <span className='user-orders-right-cancelled-product-details-color'> {item.color}</span>
                                    </span>
                                    <span className='user-orders-right-cancelled-product-details-qty-wrapper'>Qty :
                                        <span className='user-orders-right-cancelled-product-details-qty'> {item.quantity}</span>
                                    </span>
                                    <span className='user-orders-right-cancelled-product-details-total-wrapper'>Total :
                                        <span className='user-orders-right-cancelled-product-details-total'> ${item.total}</span>
                                    </span>
                                </div>
                                <button className='user-orders-right-cancelled-product-details-detail-btn'>View Detail</button>
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

export default CancelledTab
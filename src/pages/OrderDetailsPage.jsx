import React from 'react'
import './OrderDetailsPage.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EmptyWishlistPage from './EmptyWishlistPage';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const OrderDetailsPage = () => {

    const steps = [
        'Order Placed',
        'In progress',
        'Shipped',
        'Delivered'
    ];

    const orderDetailsActive = [
        {
            id: 1,
            orderNumber: '#123456789',
            orderDate: '2 June 2023, 2:40 PM',
            deliveryDate: '8 June 2023,3:40 PM',
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
    ];
    return (
        <div>
            <div>
                <div className='order-details-right-heading-main-container'>
                    <KeyboardArrowLeftOutlinedIcon style={{ fontSize: '45px' }} className='order-details-right-heading-back-btn' />
                    <span className='order-details-right-heading-info-text'>Order Details</span>
                </div>
                {orderDetailsActive.slice(0, 1).map((item, index) => (
                    <div className='order-details-right-main-container' key={index}>
                        {/* -----------------------Grey part Start--------------------------------------------- */}
                        <div className='order-details-right-grey-main-container'>
                            <div className='order-details-right-order-date-main-container'>
                                <span className='order-details-right-order-number-span'>Order no: {item.orderNumber}</span>
                                <span className='order-details-right-order-date-span-wrapper'>Placed On :
                                    <span className='order-details-right-order-date-span'> {item.orderDate}</span>
                                </span>
                            </div>

                            <span className='order-details-right-product-details-total-wrapper'>Total :
                                <span className='order-details-right-product-details-total'> ${item.total}</span>
                            </span>
                        </div>
                        {/* -----------------------Grey part End--------------------------------------------- */}
                        {/* -----------------------Stepper part Start--------------------------------------------- */}

                        <div className='order-details-right-progress-main-container'>
                            <Stepper
                                activeStep={1}
                                alternativeLabel

                                sx={{
                                    '& .MuiStepIcon-root': {
                                        color: 'grey.400', // default (inactive)
                                    },
                                    '& .MuiStepIcon-root.Mui-active': {
                                        color: 'grey.600', // active step
                                    },
                                    '& .MuiStepIcon-root.Mui-completed': {
                                        color: 'grey.600', // completed step
                                    },
                                    '& .MuiStepLabel-label': {
                                        color: 'black.500',
                                        fontWeight: '700',
                                        fontSize: '1.1rem',
                                    },
                                    '& .MuiStepLabel-label.Mui-active': {
                                        color: 'black.500',
                                        fontWeight: '700',
                                        fontSize: '1.1rem',
                                    },
                                    '& .MuiStepLabel-label.Mui-completed': {
                                        color: 'black.500',
                                        fontWeight: '700',
                                        fontSize: '1.1rem',
                                    },
                                }}
                            >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>

                        {/* -----------------------Stepper part End--------------------------------------------- */}
                        {/* -----------------------Order Status part Start--------------------------------------------- */}
                        <div className='order-details-right-grey-status-delivery-main-container'>
                            <div className='order-details-right-grey-status-main-container'>
                                <div className='order-details-right-rectangle-container'></div>
                                <div className='order-details-right-delivery-date-status-container'>
                                    <span className='order-details-right-delivery-date-status-span'> {item.deliveryDate}</span>
                                    <span className='order-details-right-delivery-info'>Your order has been successfully verified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                {/* -----------------------Order Status part End--------------------------------------------- */}
                {/* -----------------------Order Details part Start--------------------------------------------- */}
                <div className='order-details-right-grey-order-details-main-container'>
                    {orderDetailsActive.slice(0, 2).map((item, index) => (

                        <div className='order-details-right-product-main-container' key={index}>
                            <img src={item.image}
                                alt={item.title}
                                className='order-details-right-product-image'
                            />
                            <div className='order-details-right-product-content-container'>
                                <div className='order-details-right-product-heading-container'>
                                    <span className='order-details-right-product-details-title'>{item.title}</span>
                                    <span className='order-details-right-product-color-wrapper-span'>Colour :
                                        <span className='order-details-right-product-color-info'> {item.color}</span>
                                    </span>
                                </div>
                                <span className='order-details-right-product-qty-wrapper-span'>Qty :
                                    <span className='order-details-right-product-qty-info'> {item.quantity}</span>
                                </span>

                                <span className='order-details-right-product-details-total'> ${item.total}</span>

                                <div className='order-details-right-close-btn'><CloseOutlinedIcon /></div>

                            </div>
                        </div>
                    ))}
                </div>
                {/* -----------------------Order Details part End--------------------------------------------- */}


            </div>

        </div>
    )
}

export default OrderDetailsPage
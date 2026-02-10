import React, { useState } from 'react'
import "./ProductDetailsPage.css"
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Box, Button, IconButton, Tab } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Rating from '@mui/material/Rating';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ChevronDown, ChevronUp, CreditCard, Heart, Repeat2, Shirt, Truck } from 'lucide-react';
import videoImage from '../assets/product-details-video-image.png'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const ProductDetailsPage = () => {
    const productCatalog = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1767428827715-e5bad0f9a98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoZXMlMjBtb2RlbCUyMHdvbWVufGVufDB8fDB8fHww',
            title: 'Catalog-1',
            category: 'women',
            isActive: true
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1769063382706-8156b3b33eac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D',
            title: 'Catalog-2',
            category: 'women',
            isActive: false
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1769063382655-190e8edbe188?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fHw%3D',
            title: 'Catalog-3',
            category: 'women',
            isActive: false
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1769063382663-ec2414702d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
            title: 'Catalog-4',
            category: 'women',
            isActive: false
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1769063382610-6be8acb7552f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Catalog-5',
            category: 'women',
            isActive: false
        },
    ];
    const sizeArray = [
        {
            id: 1,
            boxSize: "XS",
            isActive: false,

        },
        {
            id: 2,
            boxSize: "S",
            isActive: false,
        },
        {
            id: 3,
            boxSize: "M",
            isActive: false,
        },
        {
            id: 4,
            boxSize: "L",
            isActive: true,
        },
        {
            id: 5,
            boxSize: "XL",
            isActive: false,
        },


    ];
    const colorArray = [

        {
            id: 1,
            bgColorShade: "black",
            isActive: true,
        },
        {
            id: 2,
            bgColorShade: "yellow",
            isActive: false,

        },
        {
            id: 3,
            bgColorShade: "pink",
            isActive: false,

        },
        {
            id: 4,
            bgColorShade: "red",
            isActive: false,

        },

    ];
    const womenClothing = [
        {
            id: 1,
            title: 'Multi-Colored Printed Top And Pants',
            subtitle: "Sana's Brand",
            price: '$223.00',
            image: 'https://images.unsplash.com/photo-1767428827715-e5bad0f9a98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoZXMlMjBtb2RlbCUyMHdvbWVufGVufDB8fDB8fHww'
        },
        {
            id: 2,
            title: "Blue Top With White Prints",
            subtitle: "Jhanvi's Brand",
            price: '$99.99',
            image: 'https://images.unsplash.com/photo-1768651925914-76d953fb864a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fHw%3D'
        },
        {
            id: 3,
            title: "Pink Floral Prints Kurti Suit",
            subtitle: "ZS's Brand",
            price: '$111.00',
            image: 'https://images.unsplash.com/photo-1763719161844-2552a01d929f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzIzfHx8ZW58MHx8fHx8'
        },
        {
            id: 4,
            title: 'Printed Red Half Kurti Set',
            subtitle: "Yuzee's Brand",
            price: '$119.00',
            image: 'https://images.unsplash.com/photo-1768289222847-85d000729b7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjB8fHxlbnwwfHx8fHw%3D'
        },
        {
            id: 5,
            title: 'Black Floral Prints Kurti Suit',
            subtitle: "Sana's Brand",
            price: '$423.00',
            image: 'https://images.unsplash.com/photo-1768221677708-6b04401fbf04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTN8fHxlbnwwfHx8fHw%3D'
        },
        {
            id: 6,
            title: "Blue Salwar Kameez Set",
            subtitle: "ZS's Brand",
            price: '$237.00',
            image: 'https://images.unsplash.com/photo-1768289222309-23f768607538?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njh8fHxlbnwwfHx8fHw%3D'

        },
        {
            id: 7,
            title: "Classic Karma Prints Suit",
            subtitle: "Yuzee's Brand",
            price: '$337.00',
            image: 'https://images.unsplash.com/photo-1768982596880-67459057a9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fHw%3D'
        },
        {
            id: 8,
            title: 'Yellow Floral Casual Suit',
            subtitle: "Jhanvi's Brand",
            price: '$149.00',
            image: 'https://images.unsplash.com/photo-1766471524198-055f1fdc555d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTkzfHx8ZW58MHx8fHx8'
        },
        {
            id: 9,
            title: 'Pink Border Printed Summer Wear',
            subtitle: "Sana's Brand",
            price: '$123.00',
            image: 'https://images.unsplash.com/photo-1768033976342-6dea958334d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTAwfHx8ZW58MHx8fHx8'
        },
        {
            id: 10,
            title: "Blue Border Printed Jump Suit",
            subtitle: "Jhanvi's Brand",
            price: '$255.00',
            image: 'https://images.unsplash.com/photo-1766994063823-0dfa11c17d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTY0fHx8ZW58MHx8fHx8'

        },
        {
            id: 11,
            title: "Classic Leaf Pattern Suit",
            subtitle: "Yuzee's Brand",
            price: '$237.00',
            image: 'https://images.unsplash.com/photo-1767884044765-e0619202c7b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTI1fHx8ZW58MHx8fHx8'
        },
        {
            id: 12,
            title: 'Black Leaf Pattern Suit',
            subtitle: "Z's Brand",
            price: '$119.00',
            image: 'https://images.unsplash.com/photo-1764238385987-2ffa021755a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjgxfHx8ZW58MHx8fHx8'
        }
    ];
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const [activeArrow, setActiveArrow] = useState('down');
    const [valueOfTab, setValueOfTab] = useState('1');

    const handleChange = (event, newValue) => {
        setValueOfTab(newValue);
    };

    return (
        <div>
            {/* -----------------------------------navbar part start------------------------------------------- */}
            <NavBar />
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------Product Details Mid Content Start--------------------------------------------- */}
            <div className='product-details-main-container'>
                <div className='product-details-hero-content-container'>
                    {/* ---------------------------------------Product Details Left Start--------------------------------------------- */}

                    <div className='product-details-hero-left-container'>
                        {/* ---------------------------------------Product Details Left Scroller Section Start--------------------------------------------- */}

                        <div className='product-details-hero-left-scroller-container'>
                            <div className='product-details-hero-left-image-scroller-wrapper'>
                                <div
                                    onClick={() => setActiveArrow("up")}
                                    className='product-details-arrow-up-container'
                                >
                                    <ChevronUp className={activeArrow === "up" ? 'product-details-arrow-active' : 'product-details-arrow'} />
                                </div>
                                {productCatalog.slice(0, 3).map((item) => (
                                    <div className="product-details-scroller-image-container" key={item.id}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            value={item.id}
                                            className={item.isActive ? "product-details-scroller-image product-details-scroller-image-active" : "product-details-scroller-image"}
                                        />
                                    </div>
                                ))}
                                <div
                                    onClick={() => setActiveArrow("down")}
                                    className='product-details-arrow-down-container'
                                >
                                    <ChevronDown className={activeArrow === "down" ? 'product-details-arrow-active' : 'product-details-arrow'} />
                                </div>

                            </div>
                        </div>
                        {/* ---------------------------------------Product Details Left Scroller Section End--------------------------------------------- */}
                        {/* ---------------------------------------Product Details Left Image Section Start--------------------------------------------- */}

                        <div className='product-details-hero-left-image-container'>
                            <img
                                src='https://images.unsplash.com/photo-1767428827715-e5bad0f9a98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoZXMlMjBtb2RlbCUyMHdvbWVufGVufDB8fDB8fHww'
                                className='product-details-hero-main-image-container'
                            />
                        </div>
                    </div>
                    {/* ---------------------------------------Product Details Left Image Section End--------------------------------------------- */}

                    {/* ---------------------------------------Product Details Left End--------------------------------------------- */}
                    {/* ---------------------------------------Product Details Right Start--------------------------------------------- */}

                    <div className='product-details-hero-right-container'>
                        <div className='product-details-hero-right-content-container'>
                            {/* ---------------------------------------Product Details Right Navigation Link Start--------------------------------------------- */}

                            <div className='product-details-hero-right-navigation-links-container'>
                                <a href="" className='product-details-hero-right-navigation-links'>Shop</a><KeyboardArrowRightIcon sx={{ color: '#807D7E' }} />
                                <a href="" className='product-details-hero-right-navigation-links'>Women</a><KeyboardArrowRightIcon sx={{ color: '#807D7E' }} />
                                <a href="" className='product-details-hero-right-navigation-links'>Top</a>
                            </div>
                            {/* ---------------------------------------Product Details Right Navigation Link End--------------------------------------------- */}
                            {/* ---------------------------------------Product Details Right Heading Start--------------------------------------------- */}

                            <div className='product-details-hero-right-heading-container'>
                                <h1 className='product-details-hero-right-heading'>Multi-Colored Printed Top And Pants</h1>
                            </div>
                            {/* ---------------------------------------Product Details Right Heading End--------------------------------------------- */}
                            {/* ---------------------------------------Product Details Right Rating Start--------------------------------------------- */}

                            <div className='product-details-hero-right-ratings'>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={1}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}

                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    sx={{
                                        '& .MuiRating-icon': {
                                            marginRight: '7px',
                                        },
                                        '& .MuiRating-iconFilled': {
                                            marginRight: '7px',
                                        },
                                        '& .MuiRating-iconEmpty': {
                                            marginRight: '7px',
                                        },
                                    }}
                                />

                                {value !== null && (
                                    <Box sx={{ ml: 2, color: '#807D7E' }}>
                                        {hover !== -1 ? hover : value}
                                    </Box>
                                )}
                                <div className='product-details-hero-right-comments'>
                                    <a href="" className='product-details-hero-right-comments-links'>
                                        <ChatOutlinedIcon sx={{ fontSize: '20px', ml: '40px' }} />
                                        <span>120 comment</span>
                                    </a>
                                </div>

                            </div>
                            {/* ---------------------------------------Product Details Right Rating End--------------------------------------------- */}
                            {/* ---------------------------------------Product Details Right Size Start--------------------------------------------- */}

                            <div className='product-details-hero-right-size-select-container'>
                                <span className='product-details-select-size-span'>Select Size</span>

                                <a href="" className='product-details-select-size-link'>Size Guide <ArrowForwardIcon sx={{ marginLeft: '10px' }} /></a>

                            </div>

                            <div className='product-details-size-main'>
                                {sizeArray.map((item, index) => (
                                    <div className={item.isActive ? 'product-details-size-pallette-container-active' : 'product-details-size-pallette-container'} key={index}>
                                        <span className='product-details-size-pallette-span'>{item.boxSize}</span>
                                    </div>
                                ))}
                            </div>
                            {/* ---------------------------------------Product Details Right Size End--------------------------------------------- */}
                            {/* ---------------------------------------Product Details Right Colors Start--------------------------------------------- */}

                            <div className='product-details-color-main-container'>
                                <span>Colors Available</span>

                                <div className='product-details-color-main-content-container'>
                                    {colorArray.map((item, index) => (
                                        <div className={item.isActive ? 'product-details-color-pallette-container-active' : 'product-details-color-pallette-container'}>
                                            <Box bgcolor={item.bgColorShade} className='product-details-color-pallette-box' key={index} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* ---------------------------------------Product Details Right Colors End--------------------------------------------- */}
                            {/* ---------------------------------------Product Details Right Price Buttons Start--------------------------------------------- */}
                            <div className='product-details-price-btn-main-container'>
                                <Button variant='contained'
                                    sx={{ backgroundColor: '#8a33fd', p: '7px 35px', borderRadius: '6px', textTransform: 'none', fontWeight: '600' }}
                                    startIcon={<ShoppingCartOutlinedIcon />}
                                >Add to cart</Button>
                                <Button variant='outlined' sx={{ mx: '25px', color: 'black', p: '7px 35px', borderRadius: '6px', textTransform: 'none', fontWeight: '700', border: '2px solid black' }}>$223.00</Button>
                            </div>
                            <hr className='product-details-price-btn-container-hr' />
                            {/* ---------------------------------------Product Details Right Price Buttons End--------------------------------------------- */}
                            {/* ---------------------------------------Product Details Right Info Start--------------------------------------------- */}
                            <div className='product-details-right-info-main-container'>
                                <div className='product-details-right-info-content-container'>
                                    <span className='product-details-right-info-span'><CreditCard className='product-details-right-info-icon' />Secure Payment</span>
                                    <span className='product-details-right-info-span'><Shirt className='product-details-right-info-icon' />Size & Fit</span>
                                    <span className='product-details-right-info-span'><Truck className='product-details-right-info-icon' />Free Shipping</span>
                                    <span className='product-details-right-info-span'><Repeat2 className='product-details-right-info-icon' />Free Shipping & Returns</span>
                                </div>
                            </div>
                            {/* ---------------------------------------Product Details Right Info End--------------------------------------------- */}
                        </div>
                    </div>
                </div>
            </div >
            {/* ---------------------------------------Product Details Description Start--------------------------------------------- */}
            <div className='product-details-description-main-container'>
                <div className='product-details-description-left-main-container'>
                    <div className='product-details-description-main-text-container'>
                        <div className='product-details-description-box'></div>
                        <span className='product-details-description-heading-text'>Product Description</span>
                    </div>



                    <div className='product-details-description-tabs'>
                        <TabContext value={valueOfTab}>
                            <Box sx={{ borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example"
                                    sx={{
                                        '& .MuiTabs-indicator': {
                                            backgroundColor: 'black',
                                            height: '2px',
                                        },
                                        '& .MuiTab-root.Mui-selected': {
                                            color: 'black',
                                        },
                                    }}
                                >
                                    <Tab label='Description' value="1" sx={{ textTransform: 'none', fontWeight: '600' }}></Tab>

                                    <Tab label={
                                        <>
                                            <span>User Comments <span className='product-details-description-user-comment-tab'>21</span></span>
                                        </>
                                    }
                                        value="2"
                                        sx={{ textTransform: 'none', fontWeight: '600' }}
                                    />

                                    <Tab label={
                                        <>
                                            <span>Questions & Answers <span className='product-details-description-quest-answer-tab'>4</span></span>
                                        </>
                                    } value="3" sx={{ textTransform: 'none', fontWeight: '600' }} />

                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{ color: '#807D7E' }}>
                                <span>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</span>
                            </TabPanel>
                            <TabPanel value="2" sx={{ color: '#807D7E' }}>
                                <span>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</span>
                            </TabPanel>
                            <TabPanel value="3" sx={{ color: '#807D7E' }}>
                                <span>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</span>
                            </TabPanel>
                        </TabContext>
                    </div>
                    <div className='product-details-description-left-info-container'>
                        <div className='product-details-description-left-info-vertical-line-1'></div>
                        <div className='product-details-description-left-info-vertical-line-2'></div>
                        <div className='product-details-description-left-info-vertical-line-3'></div>
                        <div className='product-details-description-left-info-container-fabric'>
                            <span className='product-details-description-left-info-span'>Fabric</span>
                            <span>Bio-washed Cotton</span>
                        </div>

                        <div className='product-details-description-left-info-container-pattern'>
                            <span className='product-details-description-left-info-span'>Pattern</span>
                            <span>Printed</span>
                        </div>
                        <div className='product-details-description-left-info-container-fit'>
                            <span className='product-details-description-left-info-span'>Fit</span>
                            <span>Regular-Fit</span>
                        </div>
                        <div className='product-details-description-left-info-container-neck'>
                            <span className='product-details-description-left-info-span'>Neck</span>
                            <span>Round Neck</span>
                        </div>
                        <div className='product-details-description-left-info-container-sleeve'>
                            <span className='product-details-description-left-info-span'>Sleeve</span>
                            <span>Half-Sleeves</span>
                        </div>
                        <div className='product-details-description-left-info-container-style'>
                            <span className='product-details-description-left-info-span'>Style</span>
                            <span>Casual Wear</span>
                        </div>

                    </div>
                </div>
                <div className='product-details-description-right-main-container'>
                    <img src={videoImage} className='product-details-description-right-image' />
                    <span className='product-details-description-right-image-timer'>1:00 M</span>
                    <span className='product-details-description-right-image-name'>Multi-Colored Printed Top And Pants</span>
                </div>
            </div>
            {/* ---------------------------------------Product Details Description End--------------------------------------------- */}
            {/* ---------------------------------------Product Details Similar Start--------------------------------------------- */}

            <div className='product-details-description-main-container'>
                <div className='products-details-similar-content-container'>
                    <div className='product-details-similar-main-text-container'>
                        <div className='product-details-similar-box'></div>
                        <span className='product-details-similar-heading-text'>Similar Products</span>
                    </div>
                    <div className="products-details-similar-card-item-grid">
                        {womenClothing.slice(1, 9).map((item, index) => (
                            <div key={item.index} className='products-details-similar-card-setup'>
                                <div className='products-details-similar-card-image-wrapper'>
                                    <Heart className='products-details-similar-card-wishlist-btn' />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="products-details-similar-card-saving-image"
                                    />

                                </div>
                                <div className='products-details-similar-card-title-text-btn-container'>
                                    <div className='products-details-similar-card-title-text-container'>
                                        <span className='products-details-similar-card-title-span'>{item.title}</span>
                                        <span className='products-details-similar-card-subtitle-span'>{item.subtitle}</span>
                                    </div>
                                    <div className='products-details-similar-card-price-bg'>
                                        <span>{item.price}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------------------------------------Product Details Similar End--------------------------------------------- */}

            {/* ---------------------------------------Product Details Mid Content End--------------------------------------------- */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div >
    )
}

export default ProductDetailsPage
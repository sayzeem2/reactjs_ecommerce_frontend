import React, { useState } from 'react'
import "./ProductsListPage.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { ChevronRight, Heart, SlidersVertical } from 'lucide-react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import { Box, Button, TextField } from '@mui/material';


function ProductsListPage() {

    const navigate = useNavigate();
    // const goToHomePage = () => {
    //     navigate("/home-page")
    // }
    const goToProductDetailsPage = () => {
        navigate("/product-details")
    }
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

    const [value, setValue] = useState([200, 700]);
    const [min, max] = value;

    const colorArray = [
        {
            id: 1,
            bgColorShade: "purple",
            bgColorName: "Purple",
        },
        {
            id: 2,
            bgColorShade: "black",
            bgColorName: "Black",
        },
        {
            id: 3,
            bgColorShade: "red",
            bgColorName: "Red",
        },
        {
            id: 4,
            bgColorShade: "orange",
            bgColorName: "Orange",
        },
        {
            id: 5,
            bgColorShade: "navy",
            bgColorName: "Navy",
        },
        {
            id: 6,
            bgColorShade: "white",
            bgColorName: "White",
        },
        {
            id: 7,
            bgColorShade: "brown",
            bgColorName: "Brown",
        },
        {
            id: 8,
            bgColorShade: "green",
            bgColorName: "Green",
        },
        {
            id: 9,
            bgColorShade: "yellow",
            bgColorName: "Yellow",
        },
        {
            id: 10,
            bgColorShade: "grey",
            bgColorName: "Grey",
        },
        {
            id: 11,
            bgColorShade: "pink",
            bgColorName: "Pink",
        },
        {
            id: 12,
            bgColorShade: "blue",
            bgColorName: "Blue",
        },
    ];
    const sizeArray = [
        {
            id: 1,
            boxSize: "XXS",

        },
        {
            id: 2,
            boxSize: "XL",

        },
        {
            id: 3,
            boxSize: "XS",

        },
        {
            id: 4,
            boxSize: "S",

        },
        {
            id: 5,
            boxSize: "M",

        },
        {
            id: 6,
            boxSize: "L",

        },
        {
            id: 7,
            boxSize: "XXL",

        },
        {
            id: 8,
            boxSize: "3XL",

        },
        {
            id: 9,
            boxSize: "4XL",

        },
    ];

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            {/* -----------------------------------navbar part start------------------------------------------- */}
            {/* <nav className="productsList-nav-container">
                <div className="productsList-nav-element-container">
                    <div className='productsList-nav-element-left'>
                        <div className='productsList-nav-logo' onClick={goToHomePage}></div>
                        <div className='productsList-nav-categories-container'>
                            <a href="" className="productsList-nav-categories-shop">Shop</a>
                            <a href="" className='productsList-nav-categories-men'>Men</a>
                            <a href="" className='productsList-nav-categories-women'>Women</a>
                            <a href="" className='productsList-nav-categories-combos'>Combos</a>
                            <a href="" className='productsList-nav-categories-joggers'>Joggers</a>
                        </div>
                    </div>
                    <div className='productsList-nav-search-container'>
                        <a href="#" className='productsList-nav-search-img'></a>
                        <input type="text" className='productsList-nav-search-input' placeholder='Search' />
                    </div>
                    <div className='productsList-nav-element-right'>
                        <div className='productsList-nav-icons-container'>
                            <div className='productsList-nav-wishlist-icon'></div>
                            <div className='productsList-nav-account-icon'></div>
                            <div className='productsList-nav-shoppingCart-icon'></div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <NavBar />
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------Products List Content Start--------------------------------------------- */}
            <div className='products-list-main-container'>
                <div className='products-list-content-main-container'>

                    {/* ---------------------------Left section Start----------------------------------------------------------- */}
                    <div className='products-list-left-main-container'>
                        {/* ---------------------------filter section Start----------------------------------------------------------- */}
                        <div className='products-list-filter-container'>
                            <span className='products-list-filter-span'>Filter</span>
                            <SlidersVertical size={25} color='#665b64' />
                        </div>
                        {/* ---------------------------filter section End----------------------------------------------------------- */}
                        {/* ---------------------------Clothes Type section Start-------------------------------------------------- */}

                        <div className='products-list-clothes-type-container'>
                            <div className='products-list-clothes-type-inner-container'>
                                <div className='products-list-clothes-type-category'><span>Tops</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Printed T-Shirts</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Plain T-Shirts</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Kurti</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Boxers</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Full Sleeve T-Shirts</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Boxers</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Pyjamas</span><ChevronRight /></div>
                                <div className='products-list-clothes-type-category'><span>Jeans</span><ChevronRight /></div>
                            </div>
                        </div>
                        {/* ---------------------------Clothes Type section End-------------------------------------------------- */}
                        {/* ---------------------------Clothes Price section Start-------------------------------------------------- */}

                        <div className='products-list-price-container'>
                            <Accordion elevation='none' sx={{ backgroundColor: 'transparent' }}>
                                <AccordionSummary
                                    color='#665b64'
                                    sx={{ borderBottom: '3px solid rgba(1, 1, 1, 0.1)', px: 6 }}
                                    expandIcon={<ExpandMoreIcon className='products-list-slider-expand-icon' />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography color='#665b64' fontSize='1.2rem' fontWeight='500' component="span" >Price</Typography>
                                </AccordionSummary>
                                <div className='products-list-slider-main'>
                                    <AccordionDetails className='products-list-slider-main-container'>

                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}
                                            max={1000}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            sx={{ color: '#8a33fd' }}

                                        />
                                        <div className='products-list-slider-input-container'>
                                            <TextField
                                                label={`$${min}`}
                                                size='small'
                                                disabled

                                                sx={{
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: "7px",
                                                    },
                                                }}
                                                className='products-list-slider-input' />
                                            <TextField
                                                label={`$${max}`}
                                                size='small'
                                                disabled

                                                sx={{
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: "7px",
                                                    },
                                                }}
                                                className='products-list-slider-input' />
                                        </div>

                                    </AccordionDetails>
                                </div>
                            </Accordion>
                        </div>
                        {/* ---------------------------Clothes Price section End-------------------------------------------------- */}
                        {/* ---------------------------Clothes Color section Start-------------------------------------------------- */}

                        <div className='products-list-color-container'>
                            <Accordion elevation='none' sx={{ backgroundColor: 'transparent' }}>
                                <AccordionSummary
                                    color='#665b64'
                                    sx={{ borderBottom: '3px solid rgba(1, 1, 1, 0.1)', px: 6 }}
                                    expandIcon={<ExpandMoreIcon className='products-list-color-expand-icon' />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography color='#665b64' fontSize='1.2rem' fontWeight='500' component="span" >Colors</Typography>
                                </AccordionSummary>
                                <div className='products-list-color-main'>
                                    <AccordionDetails className='products-list-color-main-container'>
                                        {colorArray.map((item, index) => (
                                            <div className='products-list-color-pallette-container' key={index}>

                                                <Box className='products-list-color-pallette-box'
                                                    bgcolor={item.bgColorShade} sx={{
                                                        marginBottom: 2,
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: 3,
                                                    }}
                                                />
                                                <span className='products-list-color-pallette-span'>{item.bgColorName}</span>
                                            </div>
                                        ))}

                                    </AccordionDetails>
                                </div>
                            </Accordion>
                        </div>
                        {/* ---------------------------Clothes Color section End-------------------------------------------------- */}
                        {/* ---------------------------Clothes Size section Start-------------------------------------------------- */}

                        <div className='products-list-size-container'>
                            <Accordion elevation='none' sx={{ backgroundColor: 'transparent' }}>
                                <AccordionSummary
                                    color='#665b64'
                                    sx={{ borderBottom: '3px solid rgba(1, 1, 1, 0.1)', px: 6 }}
                                    expandIcon={<ExpandMoreIcon className='products-list-size-expand-icon' />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography color='#665b64' fontSize='1.2rem' fontWeight='500' component="span" >Size</Typography>
                                </AccordionSummary>
                                <div className='products-list-size-main'>
                                    <AccordionDetails className='products-list-size-main-container'>
                                        {sizeArray.map((item, index) => (
                                            <div className='products-list-size-pallette-container' key={index}>
                                                <span className='products-list-size-pallette-span'>{item.boxSize}</span>
                                            </div>
                                        ))}

                                    </AccordionDetails>
                                </div>
                            </Accordion>
                        </div>
                        {/* ---------------------------Clothes Size section End-------------------------------------------------- */}
                        {/* ---------------------------Dress Style section Start-------------------------------------------------- */}

                        <div className='dress-style-container'>
                            <Accordion elevation='none' sx={{ backgroundColor: 'transparent' }}>
                                <AccordionSummary
                                    color='#665b64'
                                    sx={{ borderBottom: '3px solid rgba(1, 1, 1, 0.1)', px: 6 }}
                                    expandIcon={<ExpandMoreIcon className='dress-style-expand-icon' />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography color='#665b64' fontSize='1.2rem' fontWeight='500' component="span" >Dress Style</Typography>
                                </AccordionSummary>
                                <div className='dress-style-main'>
                                    <div className='dress-style-inner-container'>
                                        <div className='dress-style-category'><span>Classic</span><ChevronRight /></div>
                                        <div className='dress-style-category'><span>Casual</span><ChevronRight /></div>
                                        <div className='dress-style-category'><span>Business</span><ChevronRight /></div>
                                        <div className='dress-style-category'><span>Sport</span><ChevronRight /></div>
                                        <div className='dress-style-category'><span>Elegant</span><ChevronRight /></div>
                                        <div className='dress-style-category'><span>Formal (Evening)</span><ChevronRight /></div>

                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        {/* ---------------------------Dress Style section End-------------------------------------------------- */}

                    </div>
                    {/* ---------------------------Left section End----------------------------------------------------------- */}
                    {/* ---------------------------Right section Start----------------------------------------------------------- */}
                    <div className='products-list-right-main-container'>
                        {/* ----------------------------------------right-cards Section start------------------------------------------ */}
                        <div className='right-cards-main-container'>
                            <div className='right-cards-main-text-container'>
                                <div className='right-cards-main-text'>
                                    <span className='right-cards-heading-left-text'>Women's Clothing</span>
                                    <div className='right-cards-heading-right-text-container'>
                                        {/* <span className='right-cards-heading-right-New'>New</span> */}
                                        <Button variant='text' sx={{ textTransform: 'none', color: '#8a33fd', fontSize: '1.2rem', fontWeight: '600', }} className='right-cards-heading-right-New'>New</Button>
                                        {/* <span className='right-cards-heading-right-recommended'>Recommended</span> */}
                                        <Button variant='text' sx={{ textTransform: 'none', ml: '20px', color: 'black', fontSize: '1.2rem', fontWeight: '600', }} className='right-cards-heading-right-recommended'>Recommended</Button>

                                    </div>
                                </div>
                            </div>

                            <div className='right-cards-grid-main-container'>
                                <div className="right-cards-item-grid" onClick={goToProductDetailsPage}>
                                    {womenClothing.slice(0, 13).map((item) => (
                                        <div key={item.id} className='right-cards-card-setup'>
                                            <div className='right-cards-card-image-wrapper'>
                                                <Heart className='right-cards-wishlist-btn' />
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="right-cards-saving-image"
                                                />

                                            </div>
                                            <div className='right-cards-card-title-text-btn-container'>
                                                <div className='right-cards-card-title-text-container'>
                                                    <span className='right-cards-card-title-span'>{item.title}</span>
                                                    <span className='right-cards-card-subtitle-span'>{item.subtitle}</span>
                                                </div>
                                                <div className='right-cards-card-price-bg'>
                                                    <span>{item.price}</span>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ----------------------------------------right-cards Section end------------------------------------------ */}
                    {/* ---------------------------Right section End----------------------------------------------------------- */}
                </div>
            </div>

            {/* ---------------------------------------Products List Content End--------------------------------------------- */}



            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div >
    )
}

export default ProductsListPage








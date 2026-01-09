import React from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import nikeLogo from '../assets/nike.png';
import hnmLogo from '../assets/hnm.png';
import levisLogo from '../assets/Levis.png';
import uspoloLogo from '../assets/polo_logo.jpg';
import pumaLogo from '../assets/puma.png';
import facebookLogo from '../assets/facebook_icon.png'
import twitterLogo from '../assets/twitter_icon.png'
import linkedinLogo from '../assets/linkedin_icon.png'
import instaLogo from '../assets/instagram_icon.png'
import twoPartLeftImage from '../assets/two-part-left-image.png'
import twoPartRightImage from '../assets/two-part-right-image.png'


function HomePage() {
    const navigate = useNavigate();
    const newArrivals = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
            title: 'Knitted Joggers',
            category: 'Bottoms'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop',
            title: 'Full Sleeve',
            category: 'Tops'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
            title: 'Active T-Shirts',
            category: 'Active'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
            title: 'Urban Shirts',
            category: 'Casual'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
            title: 'Knitted Joggers',
            category: 'Bottoms'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop',
            title: 'Full Sleeve',
            category: 'Tops'
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
            title: 'Active T-Shirts',
            category: 'Active'
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
            title: 'Urban Shirts',
            category: 'Casual'
        },

    ];

    const bigSavingZone = [
        {
            id: 1,
            title: 'Hawaiian Shirts',
            subtitle: 'Dress up in summer vibe',
            discount: 'UPTO 50% OFF',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop',
            bgColor: '#4FC3C4',
            theme: 'light'
        },
        {
            id: 2,
            title: 'Printed T-Shirt',
            subtitle: 'New Designs Every Week',
            discount: 'UPTO 40% OFF',
            image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop',
            bgColor: '#D2A59F',
            theme: 'dark'
        },
        {
            id: 3,
            title: 'Cargo Joggers',
            subtitle: 'Move with style & comfort',
            discount: 'UPTO 50% OFF',
            image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
            bgColor: '#E8E8E8',
            theme: 'light'
        },
        {
            id: 4,
            title: 'Urban Shirts',
            subtitle: 'Live In Comfort',
            discount: 'FLAT 60% OFF',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop',
            bgColor: '#C4D7E0',
            theme: 'light'
        },
        {
            id: 5,
            title: 'Oversized T-Shirts',
            subtitle: 'Street Style Icon',
            discount: 'FLAT 60% OFF',
            image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop',
            bgColor: '#E5D4CC',
            theme: 'light'
        }
    ];

    const menCategories = [
        {
            id: 1,
            title: 'Shirts',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',

        },
        {
            id: 2,
            title: 'Printed T-Shirt',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1678872844677-d650b788709b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',

        },
        {
            id: 3,
            title: 'Plain T-Shirt',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1502389614483-e475fc34407e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',

        },
        {
            id: 4,
            title: 'Polo T-Shirt',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1625910513399-c9fcba54338c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvbG8lMjB0LXNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',

        },
        {
            id: 5,
            title: 'Hoodies & Sweatshirt',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1618333826210-34c62badc237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D',

        },
        {
            id: 6,
            title: 'Jeans',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGplYW5zJTIwbWFufGVufDB8fDB8fHww',

        },
        {
            id: 7,
            title: 'Activewear',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1679768763201-e07480531b49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjdGl2ZXdlYXJ8ZW58MHx8MHx8fDA%3D',

        },
        {
            id: 8,
            title: 'Boxers',
            subtitle: 'Explore Now',
            image: 'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94ZXJzJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D',

        }
    ];
    const womenCategories = [
        {
            id: 1,
            title: 'Hoodies & Sweatshirt',
            subtitle: 'Explore Now',
            image: 'https://plus.unsplash.com/premium_photo-1689371958614-cd30635630ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxob29kaWVzfGVufDB8fDB8fHww',

        },
        {
            id: 2,
            title: 'Coats & Parkas',
            subtitle: 'Explore Now',
            image: 'https://assets-jiocdn.ajio.com/medias/sys_master/root/20250129/zshv/679a280abc78b543a9072484/-473Wx593H-442794866-beige-MODEL.jpg',

        },
        {
            id: 3,
            title: 'Tees & T-Shirt',
            subtitle: 'Explore Now',
            image: 'https://plus.unsplash.com/premium_photo-1689536143355-cb60e20a0ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',

        },
        {
            id: 4,
            title: 'Boxers',
            subtitle: 'Explore Now',
            image: 'https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ikat-print-shorts-in-brick-red-rayon-460181.jpg',

        }
    ];
    const brandLogos = [
        {
            id: 1,
            subtitle: 'Explore Now',
            image: nikeLogo,
        }, {
            id: 2,
            subtitle: 'Explore Now',
            image: hnmLogo,
        }, {
            id: 3,
            subtitle: 'Explore Now',
            image: levisLogo,
        }, {
            id: 4,
            subtitle: 'Explore Now',
            image: uspoloLogo,
        }, {
            id: 5,
            subtitle: 'Explore Now',
            image: pumaLogo,
        }
    ];
    const limelight = [
        {
            id: 1,
            title: 'Tigress Skirt With Pattern Prints',
            subtitle: "Jhanvi's Brand",
            price: '$123.00',
            image: 'https://images.unsplash.com/photo-1565115021788-6d3f1ede4980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDIzfHxmYXNoaW9ufGVufDB8fDB8fHww',

        },
        {
            id: 2,
            title: "T-Shirt and Shorts Combo",
            subtitle: "NYC's Brand",
            price: '$37.00',
            image: 'https://plus.unsplash.com/premium_photo-1727967194458-d392a1d7ad11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxzaG9ydHN8ZW58MHx8MHx8fDA%3D',


        },
        {
            id: 3,
            title: "White Oversized Gremlin Jacket",
            subtitle: "AS's Brand",
            price: '$237.00',
            image: 'https://images.unsplash.com/photo-1632149877166-f75d49000351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',

        },
        {
            id: 4,
            title: 'Denim Top and Shorts Combo',
            subtitle: "Denim's Brand",
            price: '$119.00',
            image: 'https://plus.unsplash.com/premium_photo-1727942418332-d71398a73db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHxzaG9ydHN8ZW58MHx8MHx8fDA%3D',

        }
    ];
    const socialmedialogos = [
        {
            id: 1,
            altname: "facebook",
            image: facebookLogo,
        },
        {
            id: 2,
            altname: "instagram",
            image: instaLogo,
        },
        {
            id: 3,
            altname: "twitter",
            image: twitterLogo,
        },
        {
            id: 4,
            altname: "linkedin",
            image: linkedinLogo,
        },
    ];
    const goToHomePage = () => {
        navigate("/home-page")
    }
    const goToAboutUsPage = () => {
        navigate("/about-us")
    }
    const goToContactUsPage = () => {
        navigate("/contact-us")
    }
    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------------------------ */}
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            <nav className="home-nav-container">
                <div className="home-nav-element-container">
                    <div className='home-nav-element-left'>
                        <div className='home-nav-logo' onClick={goToHomePage}></div>
                        <div className='home-nav-categories-container'>
                            <a href="" className="home-nav-categories-shop">Shop</a>
                            <a href="" className='home-nav-categories-men'>Men</a>
                            <a href="" className='home-nav-categories-women'>Women</a>
                            <a href="" className='home-nav-categories-combos'>Combos</a>
                            <a href="" className='home-nav-categories-joggers'>Joggers</a>
                        </div>
                    </div>
                    <div className='home-nav-search-container'>
                        <a href="#" className='home-nav-search-img'></a>
                        <input type="text" className='home-nav-search-input' placeholder='Search' />
                    </div>
                    <div className='home-nav-element-right'>
                        <div className='home-nav-icons-container'>
                            <div className='home-nav-wishlist-icon'></div>
                            <div className='home-nav-account-icon'></div>
                            <div className='home-nav-shoppingCart-icon'></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/*  ---------------------------------------Hero Section Start-------------------------------------------------  */}
            <div className='home-hero-image-container'>
                <div className='home-hero-top-container'>
                    <div className='home-hero-prev-container'><div className='home-hero-prev-img-container'></div></div>
                    <div className='home-hero-left-container'>
                        <div className='home-hero-left-text-container'>
                            <span className='home-nav-tshirt-text'>T-Shirt / Tops</span>
                            <span className='home-nav-Heading-text'>Summer<br />Value Pack</span>
                            <span className='home-nav-cool-text'>cool / colorful / comfy</span>
                            <a href="#" className='home-nav-left-btn'>Shop Now</a>
                        </div>
                    </div>
                    <div className='home-hero-right-container'></div>
                    <div className='home-hero-next-container'><div className='home-hero-next-img-container'></div></div>
                </div>
                <div className='home-hero-bottom-container'>
                    <div className='home-hero-bottom-white-first-loader'></div>
                    <div className='home-hero-bottom-white-second-loader'></div>
                </div>
            </div>
            {/*  ---------------------------------------Hero Section End-------------------------------------------------  */}
            {/*  ---------------------------------------Two container Start-------------------------------------------------  */}
            <div className='home-two-part-main-container'>
                <div className='home-two-part-left-container'>
                    <div className='home-two-part-left-image-container'>
                        <img src={twoPartLeftImage} alt="" className='home-two-part-left-image' />
                    </div>
                    <div className='home-two-part-text-container'>
                        <span className='home-two-part-low'>Low Price</span>
                        <span className='home-two-part-cozi'>High Coziness</span>
                        <span className='home-two-part-upto'>UPTO 50% OFF</span>
                        <button className='home-two-part-explore'>Explore Items</button>
                    </div>
                </div>
                <div className='home-two-part-right-container'>
                    <div className='home-two-part-right-image-container'>
                        <img src={twoPartRightImage} alt="" className='home-two-part-right-image' />
                    </div>
                    <div className='home-two-part-text-container'>
                        <span className='home-two-part-low'>Beyoung Presents</span>
                        <span className='home-two-part-cozi'>Breezy Summer <br />Style</span>
                        <span className='home-two-part-upto'>UPTO 50% OFF</span>
                        <button className='home-two-part-explore'>Explore Items</button>
                    </div>
                </div>
            </div>
            {/*  ---------------------------------------Two container End-------------------------------------------------  */}
            {/* ----------------------------------------New Arrival Section start-------------------------------------------- */}
            <div className="ecommerce-container">
                <div className="content-wrapper">
                    {/* New Arrival Section */}
                    <div className="section new-arrival-section">
                        <div className="section-header">
                            <h2 className="section-title">New Arrival</h2>
                            <Sparkles className="sparkles-icon" />
                            <div className="badge">Fresh</div>
                        </div>

                        <div className="new-arrivals-grid">

                            {newArrivals.map((item, index) => (
                                <div key={item.id} className="arrival-card">
                                    <div className="arrival-image-wrapper">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="arrival-image"
                                        />
                                        <div className="shopping-bag-icon">
                                            <ShoppingBag size={18} color="#3e9392" />
                                        </div>
                                    </div>
                                    <div className="arrival-content">
                                        <div className="arrival-category">{item.category}</div>
                                        <h3 className="arrival-title">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ----------------------------------------New Arrival Section end-------------------------------------------- */}
                    {/* ----------------------------------------Big Saving Zone Section start-------------------------------------------- */}
                    {/* Big Saving Zone Section */}
                    <div className="section big-saving-section">
                        <div className="section-header">
                            <h2 className="section-title">Big Saving Zone</h2>
                        </div>

                        <div className="saving-zone-large-grid">
                            {bigSavingZone.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className={`saving-card saving-card-large ${item.theme}`}
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    <div className="saving-content">
                                        <div className="saving-discount">{item.discount}</div>
                                        <h3 className="saving-title">{item.title}</h3>
                                        <p className="saving-subtitle">{item.subtitle}</p>
                                    </div>

                                    <div className="saving-image-wrapper saving-image-large">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="saving-image"
                                        />
                                    </div>

                                    <button className="explore-btn">
                                        Explore Now
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="saving-zone-small-grid">
                            {bigSavingZone.slice(3).map((item) => (
                                <div
                                    key={item.id}
                                    className={`saving-card saving-card-small ${item.theme}`}
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    <div className="saving-content">
                                        <div className="saving-discount saving-discount-small">
                                            {item.discount}
                                        </div>
                                        <h3 className="saving-title saving-title-small">
                                            {item.title}
                                        </h3>
                                        <p className="saving-subtitle saving-subtitle-small">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    <div className="saving-image-wrapper saving-image-small">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="saving-image"
                                        />
                                    </div>

                                    <button className="explore-btn explore-btn-small">
                                        Explore Now
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ----------------------------------------Big Saving Zone Section end-------------------------------------------- */}
                    {/* ----------------------------------------Everyday better Section start------------------------------------------ */}
                    <div className='everyday-main-container'>
                        <div className='everyday-left-part'>
                            <div className='everyday-text-container'>
                                <h2 className='everyday-title-text'>WE MADE YOUR EVERYDAY FASHION BETTER!</h2>
                                <p className='everyday-para-text'>In our journey to improve everyday fashion, The Corner Store presents EVERYDAY wear range-Comfortable & Affordable fashion 24/7</p>
                                <button className="everyday-shopnow-button">Shop Now</button>
                            </div>
                        </div>
                        <div className='everyday-right-part'></div>
                    </div>
                    {/* ----------------------------------------Everyday better Section end------------------------------------------ */}
                    {/* ----------------------------------------Categories for MEN Section start------------------------------------------ */}
                    <div className='categories-men-main-container'>
                        <div className='categories-men-main-text-container'>
                            <div className='categories-men-main-text'>
                                <div className='categories-men-box'></div>
                                <span className='categories-men-heading-text'>Categories For Men</span>
                            </div>
                        </div>

                        <div className='categories-men-grid-main-container'>
                            <div className="categories-men-item-grid">
                                {menCategories.slice(0, 9).map((item) => (
                                    <div key={item.id} className='categories-men-card-setup'>
                                        <div className="categories-men-image-wrapper">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="categories-men-saving-image"
                                            />
                                        </div>
                                        <div className='categories-men-card-title-text-btn-container'>
                                            <div className='categories-men-card-title-text-container'>
                                                <span className='categories-men-card-title-span'>{item.title}</span>
                                                <span className='categories-men-card-subtitle-span'>{item.subtitle}</span>
                                            </div>

                                            <button className="categories-men-card-btn-container">
                                                <ArrowRight size={25} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------Categories for MEN Section end------------------------------------------ */}
                    {/* ----------------------------------------Categories for Women Section start------------------------------------------ */}
                    <div className='categories-women-main-container'>
                        <div className='categories-women-main-text-container'>
                            <div className='categories-women-main-text'>
                                <div className='categories-women-box'></div>
                                <span className='categories-women-heading-text'>Categories For Women</span>
                            </div>
                        </div>

                        <div className='categories-women-grid-main-container'>
                            <div className="categories-women-item-grid">
                                {womenCategories.slice(0, 5).map((item) => (
                                    <div key={item.id} className='categories-women-card-setup'>
                                        <div className='categories-women-image-wrapper '>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="categories-women-saving-image"
                                            />
                                        </div>
                                        <div className='categories-women-card-title-text-btn-container'>
                                            <div className='categories-women-card-title-text-container'>
                                                <span className='categories-women-card-title-span'>{item.title}</span>
                                                <span className='categories-women-card-subtitle-span'>{item.subtitle}</span>
                                            </div>

                                            <button className="categories-women-card-btn-container">
                                                <ArrowRight size={25} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------Categories for Women Section end------------------------------------------ */}
                    {/* ----------------------------------------Top Brands Deals Section start------------------------------------------ */}
                    <div className='brand-deals-main-container'>
                        <h2 className='brand-deals-title-text'>Top Brands Deal</h2>
                        <h3 className='brand-deals-discount-text'>Up To <span>60%</span> off on brands</h3>

                        <div className='brand-deals-images-main-container'>
                            {brandLogos.slice(0, 5).map((item) => (
                                <div key={item.id} className='brand-deals-brand-logo-card'>
                                    <div className='brand-deals-image-wrapper '>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="brand-deals-images"
                                        />
                                    </div>
                                </div>))}
                        </div>
                    </div>

                    {/* ----------------------------------------Top Brands Deals Section end------------------------------------------ */}
                    {/* ----------------------------------------Limelight Section start------------------------------------------ */}
                    <div className='limelight-main-container'>
                        <div className='limelight-main-text-container'>
                            <div className='limelight-main-text'>
                                <div className='limelight-box'></div>
                                <span className='limelight-heading-text'>In The Limelight</span>
                            </div>
                        </div>

                        <div className='limelight-grid-main-container'>
                            <div className="limelight-item-grid">
                                {limelight.slice(0, 5).map((item) => (
                                    <div key={item.id} className='limelight-card-setup'>
                                        <div className='limelight-card-image-wrapper'>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="limelight-saving-image"
                                            />

                                        </div>
                                        <div className='limelight-card-title-text-btn-container'>
                                            <div className='limelight-card-title-text-container'>
                                                <span className='limelight-card-title-span'>{item.title}</span>
                                                <span className='limelight-card-subtitle-span'>{item.subtitle}</span>
                                            </div>
                                            <div className='limelight-card-price-bg'>
                                                <span>{item.price}</span>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------Limelight Section end------------------------------------------ */}



                </div>
            </div>
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <footer className='footer-main-container'>
                <div className='footer-sections-main-container'>
                    <div className='footer-need-help-section-container'>
                        <h3 className='footer-need-help-heading'>Need Help</h3>
                        <a href="" className='footer-need-help-links' onClick={goToContactUsPage}>Contact Us</a>
                        <a href="" className='footer-need-help-links'>Track Order</a>
                        <a href="" className='footer-need-help-links'>Returns & Refunds</a>
                        <a href="" className='footer-need-help-links'>FAQ's</a>
                    </div>
                    <div className='footer-company-section-container'>
                        <h3 className='footer-company-heading'>Company</h3>
                        <a href="" className='footer-company-links' onClick={goToAboutUsPage}>About Us</a>
                        <a href="" className='footer-company-links'>Blog</a>
                        <a href="" className='footer-company-links' onClick={goToContactUsPage}>Contact Us</a>
                    </div>
                    <div className='footer-info-section-container'>
                        <h3 className='footer-info-heading'>More Info</h3>
                        <a href="" className='footer-info-links'>Terms and Conditions</a>
                        <a href="" className='footer-info-links'>Privacy Policy</a>
                        <a href="" className='footer-info-links'>Shipping Policy</a>
                        <a href="" className='footer-info-links'>Sitemap</a>
                    </div>
                    <div className='footer-location-section-container'>
                        <h3 className='footer-location-heading'>Location</h3>
                        <span className='footer-location-links'>support@TheCornerStore.com</span>
                        <span className='footer-location-links'>Eklingpura Chouraha,Ahmedabad Main Road</span>
                        <span className='footer-location-links'>(NH 8-Near Mahadev Hotel) Udaipur, India-313002</span>
                    </div>

                </div>

                <div className='footer-social-media-icons-container'>
                    {socialmedialogos.slice(0, 5).map((item) => (
                        <div key={item.id} className='footer-social-media-images-container'>
                            <img src={item.image} alt={item.altname} />
                        </div>
                    ))}
                </div>
                <div className='footer-copyright-container'>
                    <h4>Copyright @ 2026 The Corner Store Pvt Ltd. All Rights Reserved.</h4>
                </div>
            </footer>
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>

    )
}

export default HomePage
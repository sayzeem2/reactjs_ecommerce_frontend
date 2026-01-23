import React from 'react'
import "./ProductsListPage.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
function ProductsListPage() {

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
    }
    return (
        <div>
            {/* -----------------------------------navbar part start------------------------------------------- */}
            <nav className="productsList-nav-container">
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
            </nav>
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------Products List Content Start--------------------------------------------- */}
            <div className='products-list-main-container'>
                <div className='products-list-content-main-container'>
                    <div className='products-list-left-main-container'></div>
                    <div className='products-list-left-main-container'></div>
                </div>
            </div>

            {/* ---------------------------------------Products List Content End--------------------------------------------- */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>
    )
}

export default ProductsListPage








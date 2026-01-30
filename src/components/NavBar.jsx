import { useNavigate } from "react-router-dom";
import './NavBar.css'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { ShoppingCartOutlined, FavoriteBorderOutlined, PersonOutlined, NotificationsOutlined } from '@mui/icons-material'
import { Button } from "@mui/material";


const NavBar = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/home-page")
    }

    const CartBadge = styled(Badge)
        `& .${badgeClasses.badge} 
         {
           top: -12px;
           right: -6px;
         }`;
    return (
        // -------------------------------------------navbar part------------------------------------------------------ 
        < nav className="nav-container" >
            <div className="nav-element-container">
                <div className='nav-element-left'>
                    <div className='nav-logo' onClick={goToHomePage}></div>
                    <div className='nav-categories-container'>
                        <a href="" className="nav-categories-categories">Categories</a>
                        <a href="" className='nav-categories-women'>Women</a>
                        <a href="" className='nav-categories-men'>Men</a>
                        <a href="" className='nav-categories-kids'>Kids</a>
                        <a href="" className='nav-categories-accessories'>Accessories</a>
                        <a href="" className='nav-categories-sale'>Sale</a>
                        <a href="" className='nav-categories-brands'>Brands</a>

                    </div>
                </div>
                <div className='nav-search-container'>
                    <a href="#" className='nav-search-img'></a>
                    <input type="text" className='nav-search-input' placeholder='Search' />
                </div>

                <div className='nav-element-right'>
                    <div className='nav-icons-container'>
                        <IconButton sx={{ mx: 1.3 }}>
                            <FavoriteBorderOutlined sx={{ fontSize: 30 }} />
                        </IconButton>

                        <IconButton sx={{ mx: 1.3, p: 1 }}>
                            <ShoppingCartOutlined sx={{ fontSize: 30 }} />
                            <CartBadge badgeContent={2} color="success" overlap="circular" />
                        </IconButton >

                        <IconButton sx={{ mx: 1.3, p: 1 }}>
                            < NotificationsOutlined sx={{ fontSize: 30 }} />
                        </IconButton>

                        <IconButton sx={{ mx: 1.3, p: 1 }}>
                            <PersonOutlined sx={{ fontSize: 30 }} />
                        </IconButton>

                    </div>
                </div>
            </div>
        </nav >
    )
}
// -------------------------------------------navbar part------------------------------------------------------

export default NavBar
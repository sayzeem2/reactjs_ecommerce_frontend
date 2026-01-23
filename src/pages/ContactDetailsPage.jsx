import React from 'react'
import './ContactDetailsPage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { Inventory, FavoriteBorder, Info as InfoIcon, Logout } from '@mui/icons-material'
import { Box } from '@mui/material'


function ContactDetailsPage() {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home-page")
    }

    const menuItems = [
        { text: 'My orders', icon: <Inventory /> },
        { text: 'Wishlist', icon: <FavoriteBorder /> },
        { text: 'My Info', icon: <InfoIcon />, active: true },
        { text: 'Sign-out', icon: <Logout /> },
    ];

    const addresses = [
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isDefault: false,
            isShipping: true,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isDefault: true,
            isShipping: false,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isDefault: false,
            isShipping: false,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: 'L/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isDefault: false,
            isShipping: false,
        },
    ];

    const SidebarContent = () => {
        return (
            <Box sx={{ p: 2 }}>
                <Box sx={{ mb: 3, p: 2, bgcolor: '#e8f5f9', borderRadius: 1 }}>
                    <Typography variant='h6' gutterBottom>Hello Zeeshan</Typography>
                    <Typography variant='body2' color='textSecondary' gutterBottom>Welcome to your Account</Typography>
                </Box>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            sx={{
                                bgcolor: item.active ? '#F5F5F5' : 'transparent',
                                borderRadius: 1,
                                mb: 1,
                                '&:hover': {
                                    bgcolor: '#F5F5F5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    }
    const MainContent = () => {
        return (
            <Box sx={{ p: 2 }}>
                <Box sx={{ mb: 3, p: 0 }}>
                    <Typography variant='h5' fontWeight='600' gutterBottom sx={{ mb: 3 }}>My Info</Typography>
                    <Typography variant='h6' fontWeight='600' color='textSecondary' gutterBottom>Contact Details</Typography>

                </Box>
                <Box display='flex' alignItems='center' sx={{ marginTop: 2, borderBottom: "1px solid #808080" }}>
                    <Box width='90%' >
                        <TextField
                            sx={{
                                my: 2, fontWeight: "600",
                                "& fieldset": { border: "none" },
                                "&.Mui-focused fieldset": { border: "none" },
                                "&:hover fieldset": { border: "none" }
                            }}
                            variant='outlined'
                            fullWidth label='Your Name'
                        />
                    </Box>
                    <Button variant='text' sx={{ fontWeight: "600", textTransform: 'none' }} color='inherit'>Change</Button>
                </Box>
                <Box display='flex' alignItems='center' sx={{ marginTop: 2, borderBottom: "1px solid #808080" }}>
                    <Box width='90%' >
                        <TextField sx={{
                            my: 2, fontWeight: "600",
                            "& fieldset": { border: "none" },
                            "&.Mui-focused fieldset": { border: "none" },
                            "&:hover fieldset": { border: "none" }
                        }} variant='outlined' fullWidth label='Email Address' />
                    </Box>
                    <Button variant='text' sx={{ fontWeight: "600", textTransform: 'none' }} color='inherit'>Change</Button>
                </Box>
                <Box display='flex' alignItems='center' sx={{ marginTop: 2, borderBottom: "1px solid #808080" }}>
                    <Box width='90%' >
                        <TextField type='number' sx={{
                            my: 2, fontWeight: "600",
                            "& fieldset": { border: "none" },
                            "&.Mui-focused fieldset": { border: "none" },
                            "&:hover fieldset": { border: "none" }
                        }} variant='outlined' fullWidth label='Phone Number' />
                    </Box>
                    <Button variant='text' sx={{ fontWeight: "600", textTransform: 'none' }} color='inherit'>Change</Button>
                </Box>
                <Box display='flex' alignItems='center' sx={{ marginTop: 2, borderBottom: "1px solid #808080" }}>
                    <Box width='90%' >
                        <TextField type='password' sx={{
                            my: 2, fontWeight: "600",
                            "& fieldset": { border: "none" },
                            "&.Mui-focused fieldset": { border: "none" },
                            "&:hover fieldset": { border: "none" }
                        }} variant='outlined' fullWidth label='Password' />
                    </Box>
                    <Button variant='text' sx={{ fontWeight: "600", textTransform: 'none' }} color='inherit'>Change</Button>
                </Box>
            </Box >
        )
    }


    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------------------------ */}
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            <nav className="contact-details-nav-container">
                <div className="contact-details-nav-element-container">
                    <div className='contact-details-nav-element-left'>
                        <div className='contact-details-nav-logo' onClick={goToHomePage}></div>
                        <div className='contact-details-nav-categories-container'>
                            <a href="" className="contact-details-nav-categories-shop">Shop</a>
                            <a href="" className='contact-details-nav-categories-men'>Men</a>
                            <a href="" className='contact-details-nav-categories-women'>Women</a>
                            <a href="" className='contact-details-nav-categories-combos'>Combos</a>
                            <a href="" className='contact-details-nav-categories-joggers'>Joggers</a>
                        </div>
                    </div>
                    <div className='contact-details-nav-search-container'>
                        <a href="#" className='contact-details-nav-search-img'></a>
                        <input type="text" className='contact-details-nav-search-input' placeholder='Search' />
                    </div>
                    <div className='contact-details-nav-element-right'>
                        <div className='contact-details-nav-icons-container'>
                            <div className='contact-details-nav-wishlist-icon'></div>
                            <div className='contact-details-nav-account-icon'></div>
                            <div className='contact-details-nav-shoppingCart-icon'></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/* -------------------------------------------Mid part start------------------------------------------------------ */}

            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={3} >
                        <Paper elevation={0} >
                            <SidebarContent />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9} sx={{ width: '75%' }}>
                        <Paper elevation={0} >
                            <MainContent />
                        </Paper>
                    </Grid>

                </Grid>

            </Container>






            {/* -------------------------------------------Mid part End------------------------------------------------------ */}

            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div >
    )
}

export default ContactDetailsPage
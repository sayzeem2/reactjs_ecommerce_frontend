import React from 'react'
import './ContactDetailsPage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { Inventory, FavoriteBorder, Info as InfoIcon, Logout } from '@mui/icons-material'
import { Box } from '@mui/material'
import NavBar from '../components/NavBar';


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
            isBilling: true,
            isHome: 'Home',
            isDefault: false,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: true,
            isHome: 'Home',
            isDefault: false,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: '1/B Rajgaghitnagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: false,
            isHome: 'Office',
            isDefault: true,
        },
        {
            name: 'Jhanvi shah',
            phone: '9924022345',
            address: 'L/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Rajyaghagar road',
            isBilling: false,
            isHome: 'Home2',
            isDefault: true,
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
    const AddressContent = () => {
        return (
            <Box sx={{ p: 2 }}>
                <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ mb: 3, p: 0 }}>
                    <Typography variant='h5' fontWeight='600' gutterBottom sx={{ mb: 3 }}>Address</Typography>
                    <Typography variant='h6' fontWeight='600' color='textSecondary' gutterBottom sx={{ mt: 3, mb: 3 }}>Add New</Typography>
                </Box>
                <Box display='flex' alignItems='center' sx={{ marginTop: 2, }}>
                    <Box display='flex' flexWrap='wrap' >
                        {addresses.map((item, index) => (
                            <Box key={index} display='flex' flexDirection='column' borderRadius='10px' sx={{ backgroundColor: '#eeeeee', width: '47%', p: 6, mb: 3, mx: 2 }}>
                                <Typography variant='h5' color='textSecondary' fontWeight='600' gutterBottom sx={{ mb: 3 }}>{item.name}</Typography>
                                <Typography variant='h6' color='textSecondary' fontWeight='500' gutterBottom sx={{ mb: 3 }}>{item.phone}</Typography>
                                <Typography variant='h6' color='textSecondary' fontWeight='500' gutterBottom sx={{ mb: 3 }}>{item.address}</Typography>
                                <Box>
                                    <Button variant='outlined' color='textSecondary' sx={{ px: 2, borderRadius: '10px' }}>{item.isHome}</Button>
                                    {item.isBilling && <Button variant='outlined' color='textSecondary' sx={{ mx: 2, px: 2, borderRadius: '10px' }}>Default Billing Address</Button>}
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Button variant='text' color='textSecondary' sx={{ fontWeight: '900', borderRadius: '10px' }}>Remove</Button>
                                    <Button variant='text' color='textSecondary' sx={{ fontWeight: '900', borderRadius: '10px' }}>Edit</Button>
                                    {item.isDefault && <Button variant='text' color='textSecondary' sx={{ fontWeight: '900', px: 1, borderRadius: '10px' }}>Set As Default</Button>}
                                </Box>
                            </Box>))}

                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------------------------ */}
            {/* -------------------------------------------navbar part------------------------------------------------------ */}
            {/* <nav className="contact-details-nav-container">
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
            </nav> */}
 <NavBar />
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
                            <AddressContent />
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
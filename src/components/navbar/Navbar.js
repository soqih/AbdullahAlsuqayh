import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './Navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
// import { display } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const container = undefined;
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const navItems = [{ pageName: 'Home', pagePath: '/home' }, { pageName: 'Blog', pagePath: 'blogs' }, { pageName: 'Work', pagePath: 'projects' }];
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        // <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor:'red'}}>
        navItems.map((item, i) => (
            <div key={i} className={styles.links} onClick={handleDrawerToggle} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Link className={styles.link} key={i} to={item.pagePath}>{item.pageName}</Link>
            </div>
        ))
    );


    return (

        <Box className={styles.container}>
            <AppBar className={styles.appbar} color="transparent" elevation={0} component="nav" position="relative">
                <Toolbar sx={{ justifyContent: "space-between", alignItems: 'center', marginTop: '2rem' }}>


                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', md: 'block' } }}

                    >
                        <Link to='/home'>
                            <img className={styles.logo} src={logo} alt="" />
                        </Link>

                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>


                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>

                        <div >
                            {navItems.map((item, i) => (

                                <Link key={i} className={styles.a} to={item.pagePath}>{item.pageName}</Link>

                            ))}
                        </div>

                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', opacity: 0.9 },
                    }}
                >
                    <CloseIcon onClick={(() => handleDrawerToggle())} sx={{ margin: '9vh 13vw', marginBottom: '15vh', cursor: 'pointer', alignSelf: 'flex-end' }} />
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;
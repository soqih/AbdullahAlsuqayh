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
import { display } from '@mui/system';

const Navbar = () => {
    const container = undefined;
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const navItems = [{ pageName: 'Home', pagePath: '/' }, { pageName: 'Blog', pagePath: 'blogs' }, { pageName: 'Work', pagePath: 'projects' }];
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img className={styles.logo} src={logo} alt="" />

            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <div className={styles.links} >
                        <Link className={styles.link} key={i} to={item.pagePath}>{item.pageName}</Link>

                    </div>

                ))}
            </List>
        </Box>
    );


    return (

        <Box className={styles.container}>
            <AppBar className={styles.appbar} color="transparent" elevation={0} component="nav" position="relative">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } , marginTop:'2rem'}}
                    >
                        <MenuIcon sx={{fontSize:'2rem'}} />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
                    >
                        <img className={styles.logo} src={logo} alt="" />

                    </Typography>

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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;
import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import {AddShoppingCart, ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/icon.png';
import useStyle from './style';

function Navbar( {totalItems} ) {
    const classes=useStyle();
    const location=useLocation();
    // console.log(`from Nav${totalItems}`);
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to='/home' variant="h6" className={classes.title} color="inherit">
                    <img src={logo} atl="icon" height="30px" width='30px' className={classes.image}/>
                    The Plant Store
                </Typography>
                <div className={classes.grow}/>
                {location.pathname!=='/cart' &&(<div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="Show cart Item" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>    
        </AppBar>   
        </>
    )
}

export default Navbar

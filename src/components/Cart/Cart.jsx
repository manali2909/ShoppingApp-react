import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core';
import useStyle from './style';
import CartItem from './CartItem/CartItem';
function Cart({cart,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart}) {
    console.log(cart);
    const classes=useStyle();
    const cart_items =cart.line_items;
   
    const EmptyCart = ()=>{
           return <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!!</Typography>
     };
    
    const FilledCart =()=>{
                return<>
                    <Grid container spacing={3}>
                        {cart.line_items.map((item)=>{
                            return (<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                            </Grid>)
                        })
                        }
                    </Grid>
                    <div className={classes.cardDetails}>
                        <Typography variant='h5'>
                            Subtotal:{cart.subtotal.formatted_with_symbol}
                        </Typography>
                        <div>
                            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                            <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Check Out</Button>
                        </div>
                    </div>
                </>
    }
    if(!cart.line_items) 
        return <h1 className={classes.toolbar}>Loading..'</h1>   

    
    return(
        
            <Container>
    {/*             <div className={classes.toolbar}/> */}
                <Typography gutterbottom className={classes.title} variant='h4'>My Cart </Typography>
                {!cart_items.length ? <EmptyCart />: <FilledCart/>}
            </Container>

    )
}

export default Cart

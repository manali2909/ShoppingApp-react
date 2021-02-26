import React,{useState,useEffect} from 'react'
import {commerce} from './lib/commerce';
import {Products,Navbar,Cart,SingleProduct} from './components';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import {Backdrop,CircularProgress} from '@material-ui/core';
function App() {
    const [products , setProducts] =useState([]);
    const [cart,setCart]=useState({});
   
    const fetchProduct =async ()=>{
        const {data}=await commerce.products.list();
        setProducts(data);
    }

    const fetchCart=async ()=>{
        const c=await commerce.cart.retrieve();
        setCart(c);
       
    }

    const handleAddToCart= async (productId,quantity)=>{
        const {cart}=await commerce.cart.add(productId,quantity);
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId,quantity)=>{
        const {cart}=await commerce.cart.update(productId,{quantity});
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId)=>{
        const {cart} =await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleEmptyCart=async ()=>{
        const {cart} =await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProduct();
        fetchCart();
    }, [])
    
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path ='/cart'>
                        <Cart 
                        cart={cart}
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleEmptyCart={handleEmptyCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Route>
                    <Route path='/products/:id' exact component={SingleProduct}/>
                </Switch>
                
                  </div>
        </Router>
    )
}

export default App

import React, {useState,useEffect}from 'react'
import useStyles from './Product/SingleProduct_css';
import {commerce} from './../../lib/commerce';
import {Grid,Paper,Typography,ButtonBase} from '@material-ui/core';

function SingleProduct({match}) {
    const classes=useStyles();
    const [product, setproduct] = useState(null)
    
    const fetchProduct=async ()=>{
        const c=await commerce.products.retrieve(match.params.id)
        setproduct(c);
    }
    useEffect(() => {
       fetchProduct();
    }, [])

    console.log(product);
    
    
    return (
        <div className={classes.root}>
        <div className={classes.toolbar}/>
        
        {(product!==null)?
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={product.name} src={product.media.source} />
              </ButtonBase>
            </Grid>
            
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={10}>
                <Grid item xs>
                  <Typography gutterBottom variant="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {product.price.formatted_with_symbol}
                  </Typography>
                  <Typography dangerouslySetInnerHTML={{__html:product.description}}variant="body2" color="textSecondary"/>
                   
                </Grid>
                
              </Grid>
              
            </Grid> 
          </Grid>
        </Paper>  :<div/>}
      </div>
    )
}

export default SingleProduct

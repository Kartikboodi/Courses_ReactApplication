import React, { useState } from 'react'
import './ShoppingCart.css'
import Banner from './Banner'
import { Typography, Card, Button } from '@mui/material'
import CardInCart from './CardInCart'
import { useAppSelector} from '../app/hooks'
import DialogAlert from './DialogAlert'


function ShoppingCart() {
    const cartValue = useAppSelector((state) => state.Cart.totalCartValue)
    const courses = useAppSelector((state) => state.Cart.courses)
    const coursesInCart = useAppSelector((state) => state.Cart.courses.length)
    const [open, setOpen] = useState(false);

    // const handleClick = () ={
    //     // setOpen(true);
    // }
    return (
        <React.Fragment>
            <Banner message="Shopping Cart"></Banner>
            <div style={{margin:'0rem 3rem 0rem 3rem'}}>
                <Typography variant='subtitle1' style={{marginLeft:"1.5rem"}} >{coursesInCart} Courses in Cart</Typography>
                <div className='content'>
                    <div className='list'>
                        {courses.map(course => < CardInCart course={course} />)}
                    </div>
                    <Card className='cartValue'>
                        <Typography variant='body2' color="text.primary">Total Amount</Typography>
                        <Typography variant='h5'>Rs {cartValue} /-</Typography>
                        <Typography variant='body2' style={{fontSize:10,color:"green"}}>You saved Rs 1030/-</Typography>
                        <Button variant='contained' color='primary' style={{width:"100%"}}>CHECKOUT</Button>
                    </Card>
                </div>
            
            </div>
            <DialogAlert                
                alertType = 'success'
                title= "ORDER SUCCESS"
                message = "you have successfully placed your order"
                open={open}
                onClose={() => setOpen(false)}
            />
        </React.Fragment>
        
    )
}

export default ShoppingCart
import React, { useState } from 'react'
import {Card, CardContent, Typography, Button, CardActions, Paper, Box} from '@mui/material'
import './Cart.css'
import { useAppSelector} from '../app/hooks'

function Cart() {

  const coursesInCart = useAppSelector((state) => state.Cart.courses)  
  const count = useAppSelector((state) => state.Cart.courses.length)
  const cartValue = useAppSelector((state) => state.Cart.totalCartValue)

  return (
    <Card style={{width:"100%",height:'100%'}} >
        <div className='cartContent' >
            <div style={{width:'100%',textAlign:'center'}}>
                <Typography variant='subtitle1' color="text.secondary" gutterBottom>
                        YOUR CART DETAILS
                </Typography>
                <hr />
            </div>
            <div className='cartItems'>
                <Typography variant='body2' 
                color="text.secondary" 
                style={{fontStyle:'italic', display:count === 0?'block':'none'}} 
                gutterBottom>
                        Your cart is empty right now. Please add the courses to the cart from the list
                </Typography>
                <div style={{display:count === 0?'none':'block'}}>
                  {coursesInCart.map(course => <Paper key={course.id} elevation={4} style={{display:'flex',marginTop:'0.3rem',height:'auto'}}>
                    <Box style={{backgroundColor:'grey'}} width={30} height={30}></Box>
                    <span style={{fontSize:12, marginLeft:'0.5rem', marginRight:'auto',width:'50%'}}>{course.title}</span>
                    <span style={{fontSize:12, fontWeight:'500', display:'flex', alignItems:'flex-end'}}>Rs {course.discountedPrice}/-</span>
                  </Paper>)}
                </div>
            </div>
            <div>
            <hr/>
                <Typography variant='body2' color="text.primary" gutterBottom>
                        Total Cart Value
                </Typography>
                <Typography variant='subtitle1' style={{color:'black',fontWeight:'bold',fontSize:18}}>
                    Rs {cartValue} /-
                </Typography>

            </div>
      </div>
    </Card>
  )
}

export default Cart
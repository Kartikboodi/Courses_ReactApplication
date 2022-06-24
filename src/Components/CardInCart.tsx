import React, { useState } from 'react'
import { Card, Link, Typography,IconButton } from '@mui/material'
import './CardInCart.css'
import { Box } from '@mui/system'
import ReactImg from '../Assets/ReactJS.jpg'
import { Delete } from '@mui/icons-material'
import Course from '../Course'
import { useAppDispatch} from '../app/hooks'
import { removeFromCart} from '../Features/Cart/CartCoursesSlice'

function CardInCart<Course>(course:Course) {
    const [courseItem,setCourse] = useState(JSON.parse(JSON.stringify(course)).course);
    const dispatch = useAppDispatch()

    const handleDelete = () =>{
        dispatch(removeFromCart(courseItem))
    }

    return (
        <Card className='cardContainer-cart' elevation={4}>
            <div className='cardMedia'>       
                <Box className='image'>
                        <img src={ReactImg} alt="No preview image" width="100%" height="100%"/>
                </Box>
                <div className='cardTitle'>
                    <Typography variant="subtitle2" color="text.primary" style={{fontSize:14, fontWeight:"bold"}}>
                        {courseItem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        {courseItem.author}
                    </Typography>
                </div>            
            </div>
            <Link style={{marginLeft:'auto', marginRight:'5%', cursor:'pointer'}}>Move to Wishlist</Link>
            <Typography variant="subtitle2" color="text.primary" style={{fontWeight:'bold', marginRight:'5%'}} >
                    Rs {courseItem.discountedPrice} /-
            </Typography>
            <IconButton style={{marginRight:'3%'}} onClick={handleDelete}>
                <Delete/>
            </IconButton>
            
        </Card>
    )
}

export default CardInCart
import React, { useEffect, useState } from 'react'
import {Card,Button, Typography, Chip, Box, IconButton} from '@mui/material'
import { Add, Delete, NavigateNext, StarRounded} from '@mui/icons-material'
import ReactImg from '../Assets/ReactJS.jpg'
import './CourseItem.css'
import { Link } from 'react-router-dom'
import DialogAlert from './DialogAlert'
import { useAppDispatch, useAppSelector} from '../app/hooks'
import { addToCart} from '../Features/Cart/CartCoursesSlice'
import { addToWishlist,removeFromWishlist } from '../Features/WishList/WishlistSlice'
import CourseDetails from './CourseDetails'
import Course from '../Course'


function CourseItem<Course>(course:any) {
    // const { course, fromWishlist} = props;
    const [courseItem,setCourse] = useState(JSON.parse(JSON.stringify(course)).course);
    const [open, setOpen] = React.useState(false);
    const [open1,setOpen1] = useState(false);

    
    const dispatch = useAppDispatch();
    const coursesInCart = useAppSelector((state) => state.Cart.courses)
    const coursesInWishlist = useAppSelector((state) => state.Wishlist.courses)
    const link = "/coursedetails"
    const fromWishlist = JSON.parse(JSON.stringify(course)).fromWishlist
    const [startColor,setColor] = useState(() => {
        if(coursesInWishlist.find(c=> c.id === courseItem.id)){
            return true
        }
        return false;
    })

    const handleSave =() => {   
        if(coursesInWishlist.find(c=> c.id === courseItem.id)){
            dispatch(removeFromWishlist(courseItem))
            setColor(false)
            //setOpen1(true)
        }
        else{
            dispatch(addToWishlist(courseItem))
            setColor(true)
        }
        
    }

    const handleAddToCart = () => {  
        if(coursesInCart.find(c=> c.id === courseItem.id)){
            setOpen1(true)
        }
        else{
            dispatch(addToCart(courseItem))
            setOpen(true)
        }
    }

    const handleDelete = () =>{
        dispatch(removeFromWishlist(courseItem))
    }

    let tagNum = 0;
    return (
    <React.Fragment>
        <Card className='cardContainer' elevation={4} style={{alignItems:'center'}}>
            <div className='cardMedia'>       
            <Box className='image'>
                    <img src={ReactImg} alt="No preview image" width="100%" height="100%"/>
            </Box>
                <div className='cardTitle'>
                    <Typography variant="subtitle1" color="text.primary" style={{fontSize:12, fontWeight:"bold"}}>
                        {courseItem.title}
                    </Typography>
                    <div className='div-tags'>
                        {courseItem.tags.map((tag:string) => <Chip key={++tagNum} label={tag} color='success' size='small' style={{margin: "0.5rem", fontSize:9}}/>)}
                    </div>
                </div>
            </div>

            <Typography variant="body2" color="text.secondary" fontSize={10} style={{marginRight:'3%'}} >
                {courseItem.author}
            </Typography>
            <IconButton 
            style={{marginRight:'2%',display: fromWishlist?'none':'block'}} 
            onClick={handleSave}>
                <StarRounded style={{color:!startColor?'lightgrey':'royalblue'}}/>
            </IconButton>
            {/* <Button 
            variant='contained'
            // fontSize={10}
            style={{fontWeight:'bold',fontSize:10, marginRight:'2%',display:fromWishlist?'none':'block'}}
            size="small" 
            // startIcon={<StarRounded/>} 
            onClick={handleSave} >Save</Button> */}

            <Typography variant="subtitle2" color="black" style={{marginRight:'3%'}}>
                Rs  {courseItem.discountedPrice}/-
            </Typography>
            <Typography variant="subtitle2" color="black" style={{marginRight:'3%',textDecoration:'line-through',fontSize:12}}>
                Rs  {courseItem.actualPrice}/-
            </Typography>
            <Button 
            variant='outlined' color='secondary' 
            startIcon={<Add/>} 
            size="small" 
            style={{fontWeight:'bold',marginRight:'1%',fontSize:10}} 
            onClick={handleAddToCart}
            >Add To Cart</Button>
            <Link  to="/coursedetails" state={{ course:courseItem }} style={{marginRight:'1%',display:fromWishlist?'none':'block'}}>
                <NavigateNext  />
            </Link>
            <IconButton style={{marginRight:'2%',display:!fromWishlist?'none':'block'}} onClick={handleDelete}>
                <Delete/>
            </IconButton>
        </Card>
        <DialogAlert                
                alertType = 'warning'
                title= "ITEM EXISTS"
                message = "This Course already exists in your cart"
                open={open1}
                onClose={() => setOpen1(false)}
            />
        <DialogAlert                
                alertType = 'success'
                title= "SUCCESS MESSAGE"
                message = "Item has been added to the CART"
                open={open}
                onClose={() => setOpen(false)}
            />
    </React.Fragment>
  )
}

export default CourseItem
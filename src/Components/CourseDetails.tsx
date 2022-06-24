import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import { Breadcrumbs,Chip,Link,Typography,Card,Box,Button } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
import './CourseDetails.css'
import image from '../Assets/HTML.png'
import { useAppDispatch } from '../app/hooks'
import { addToCart } from '../Features/Cart/CartCoursesSlice'
import Course from '../Course'
import { useLocation} from 'react-router-dom'

function CourseDetails() {
  const tags= ['React','React Hook','Typescript'];
  const location= useLocation()
  const {course}:any = location.state;
  console.log(course)
  return (
    <React.Fragment>
        <Banner message='Discover Latest Courses on React'></Banner>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" />} style={{margin:'1.3rem 3rem 1rem 3rem',paddingLeft:'2%'}}>
          <Link 
          underline="hover" 
          color="inherit"
          href="/courses"
          fontSize={14}>
              All Courses
          </Link>
          <Typography color="text.primary" fontSize={14}>Responsive Design Course</Typography>
        </Breadcrumbs>
        <nav className='titleCard'>
          <div className='title'>
            <span className='courseName'>Responsive Design Course XYZ How to design responsive templates</span>
            <Typography variant='body2' fontSize={12} style={{color:'grey'}}>
              Responsive Design Course XYZ How to design responsive templates
            </Typography>
            <Typography variant='body2' fontSize={13} style={{color:'coral'}}>
              Josheph Marie
            </Typography>
            <div className='tags'>
              {tags.map(tag => <Chip color='primary' size='small' style={{marginRight:"1rem"}} label={tag} />)}
            </div>
          </div>
          <div className='media-div'>           
            <iframe className='mediaCard' 
              src="https://www.youtube.com/embed/LMagNcngvcU"
              frameBorder='1em'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
             />
            {/* <iframe src={} width="100" height="100" ></iframe> */}           
          </div>
        </nav>
        <div style={{display:'flex',alignItems:'end',width:'100%'}}>
          <Card className='desc'>
              <div style={{fontSize:12}}>
              <div><span style={{color:'grey',fontWeight:'bold',fontSize:14}}>Course Details</span></div>
                <span>
                This card should have an image same as the course image displayed in the dashboard 
                for the particular course. The card should have the price details 
                <br/>  <br/>
                (discounted price too if applicable). This card should also allow the user to add 
                the course to the cart or the wishlist and show the popup once the course is added to the cart. 
                It should show the list of courses added to the wishlist. 
                <br/>  <br/>
                Each course should be given an option to Add to cart. Clicking on it 
                should get an update similar to what we have on the dashboard. It should have the delete option. 
                Deleting should remove the course from being in the wishlist. 
                <br/>  <br/>
                This card should have an image same as the course image displayed in the dashboard 
                for the particular course. The card should have the price details 
                <br/>  <br/>
                (discounted price too if applicable). This card should also allow the user to add 
                the course to the cart or the wishlist and show the popup once the course is added to the cart. 
                <br/>  <br/>
                Add appropriate validations to each of the fields.Save Button should be disabled when any of the validations fail
                </span>
              </div>
          </Card>
          <div className='rateCard'>
            <Typography variant='h5' color='text.primary' fontWeight={'bold'}>Rs 564/-</Typography>
            <Typography variant='body1' color='text.secondary' style={{textDecoration:'line-through'}}>Rs 564/-</Typography>
            <Typography variant='body2' style={{color:'coral'}}><b>8 hours </b>left for this price</Typography>
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <Button variant='contained' size='small' fullWidth style={{margin:"2%"}}>ADD TO CART</Button>
              <Button variant='outlined' size='small' style={{margin:"2%"}} fullWidth>ADD TO WISHLIST</Button>
            </div>
          </div>
        </div>
        
    </React.Fragment>
  )
}

export default CourseDetails
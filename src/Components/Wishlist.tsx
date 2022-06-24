import {Breadcrumbs, Link, Typography, Select, MenuItem, TextField, IconButton, SelectChangeEvent, Pagination} from '@mui/material'
import './Courses.css'
import Cart from '../Components/Cart'
import React, { useState } from 'react'
import Banner from './Banner'
import CourseItem from './CourseItem'
import { useAppSelector} from '../app/hooks'
import Course from '../Course'
// import { } from '../Features/WishList/WishlistSlice'

function Wishlist() {
  const [sortValue, setSortValue] = React.useState("0");
  const wishlistFrom = true
  const [currentPage, setCurrentPage] = React.useState(1);
  const [coursesPerPage] = React.useState(5);
  const [pageCount,setPageCount] = useState(1)

  const courses = useAppSelector((state) => state.Wishlist.courses)

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse,indexOfLastCourse);

  const handlePageChange = (event: React.ChangeEvent<unknown>,value: number) => {
      setCurrentPage(value);
  }

  return (
    <React.Fragment>
        <div><Banner message="Discover Latest Courses On React"></Banner></div>
        <div style={{margin:'0rem 3rem 0rem 3rem'}}>
        <div className='topdiv'>
                  
            <Typography color="text.primary" style={{fontSize:12}}>My Wishlist</Typography>
             
            <Select value={sortValue} className='div-field' 
            style={{fontSize:10}}
            onChange={handleChange}>
                <MenuItem value={0}>Course Price</MenuItem>
                <MenuItem value={1}>Low To High</MenuItem>
                <MenuItem value={2}>High To Low</MenuItem>
            </Select>
          </div>
          <div className='container'>
              <div className='list'>
                  {currentCourses.map((courseItem,index) => 
                  <CourseItem 
                  key={index} 
                  course={courseItem}
                  fromWishlist={wishlistFrom}
                  />)}
                 
              </div>
              <div className="cartComponent">
                  <Cart></Cart>
              </div>
          </div>
          <Pagination count={pageCount} color='primary' shape="rounded" 
          size='small' 
          onChange={handlePageChange}
          />  
        </div>
       
      </React.Fragment>
  )
}

export default Wishlist
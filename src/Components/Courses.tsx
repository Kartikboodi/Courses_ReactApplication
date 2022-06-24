import React, { useEffect, useState } from 'react'
import CourseItem from './CourseItem'
import './Courses.css'
import Cart from '../Components/Cart'
import {Breadcrumbs, Link, Typography, Select, MenuItem, TextField, IconButton, SelectChangeEvent} from '@mui/material'
import { Construction, NavigateNext, Search } from '@mui/icons-material'
import Banner from './Banner'
import Pagination from '@mui/material/Pagination'
import Course from '../Course'

function Courses() {
    const [sortValue, setSortValue] = React.useState("0");
    const [courses,setData]=useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const coursesPerPage = 5;
    const [pageCount,setPageCount] = useState(1);
    const wishlistFrom = false;

    const handleChange = (event: SelectChangeEvent) => {
      setSortValue(event.target.value as string);
    };

    const getData=()=>{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(JSON.parse(JSON.stringify(myJson)))
        const rem = Math.floor(myJson.length%coursesPerPage);
        const count = rem === 0?Math.floor(myJson.length/coursesPerPage): Math.floor(myJson.length/coursesPerPage)+1
        setPageCount(count);
      })
      .catch(
        function(err){
          console.log(err)
        }
      );
    }
    useEffect(()=>{
      getData()
    },[])

   const indexOfLastCourse = coursesPerPage * currentPage;
   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
   const currentCourses = courses.slice(indexOfFirstCourse,indexOfLastCourse);

   const handlePageChange = (event: React.ChangeEvent<unknown>,value: number) =>{
    setCurrentPage(value)
   }  
  //  console.log(currentCourses.sort((a,b) => a.discountedPrice < b.discountedPrice))

    return (
      <React.Fragment>
        <div><Banner message="Discover Latest Courses On React"></Banner></div>
        <div style={{margin:'0rem 3rem 0rem 3rem'}}>
        <div className='topdiv'>
                  
            <Typography color="text.primary" style={{fontSize:12}}>All Courses</Typography>
             
            <Select value={sortValue} className='div-field' 
            style={{fontSize:10}}
            onChange={handleChange}>
                <MenuItem value={0}>Course Price</MenuItem>
                <MenuItem value={1}>Low To High</MenuItem>
                <MenuItem value={2}>High To Low</MenuItem>
            </Select>
            
            <TextField placeholder='search here' className='div-field'>   </TextField>
                  <IconButton color='primary'>
                    <Search></Search>
                  </IconButton>
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
          <Pagination count={pageCount} color='primary' shape="rounded" size='small' onChange={handlePageChange}/>  
        </div>
       
      </React.Fragment>

    )
}

export default Courses
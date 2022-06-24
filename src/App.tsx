import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';
import ShoppingCart from './Components/ShoppingCart';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CourseDetails from './Components/CourseDetails';
import Profile from './Components/Profile';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/courses" element={<Courses/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
            <Route path="/coursedetails" element={<CourseDetails />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/" element={<Courses />}></Route>         
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
        
  /*
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    // ,{
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }
    // }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
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
  return (
    <div className="App">
     
       {/* {data} */
  //     Hello
     
  //   </div>
  // );

}

export default App;

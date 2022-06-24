import React from 'react'
import './Profile.css'
import { Card, Grid,TextField, Paper, FormControl,FormControlLabel,Checkbox,RadioGroup,FormLabel,Radio, Button } from '@mui/material'
import Banner from './Banner'
import image from '../Assets/profile.jpg'


function Profile() {
  return (
   <React.Fragment>
       <Banner message="My Profile"></Banner>
       <div className='container-profile'>
        <div className='image-div'>
            <img src={image} alt="Image Not Available" style={{backgroundColor:"grey",width:'12rem',height:'12rem'}}/>
            {/* <Box style={{width:'70%',backgroundColor:'grey'}}></Box> */}
        </div>
        <Paper className='form-div' elevation={4}>
            <FormControl>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                       <label htmlFor="displayName"> Display Name</label><br/><br/>
                        <TextField id='displayName' style={{width:'80%'}}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <label htmlFor="firstName"> First Name</label><br/><br/>
                        <TextField id="firstName"  style={{width:'80%'}}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <label htmlFor="lastName"> Last Name</label><br/><br/>
                        <TextField id ="lastName"  style={{width:'80%'}}></TextField>
                    </Grid>
                    <Grid item xs={8}>
                        <label htmlFor="about"> About Yourself</label><br/><br/>
                        <TextField id="about" multiline rows={3} style={{width:'90%'}}></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <label> Your area of Interest</label><br/><br/>
                        <FormControlLabel control={<Checkbox size='small'/>} label="Designer" /><br/>
                        <FormControlLabel control={<Checkbox size='small'/>} label="Developer" /><br/>
                        <FormControlLabel control={<Checkbox size='small'/>} label="Project Manager" /><br/>
                        <FormControlLabel control={<Checkbox size='small'/>} label="Sales" /><br/>
                    </Grid>
                    <Grid item xs={6}>                    
                    <label>Are you a strudent or professional</label>
                    <RadioGroup
                        defaultValue="Student">
                        <FormControlLabel value="Student" control={<Radio size='small' />} label="Student" />
                        <FormControlLabel value="Proffesional" control={<Radio size='small'/>} label="Proffesional" />                       
                    </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant='outlined' style={{width:'80%',paddingLeft:'2%'}}>
                            <label>How much of Experience you have</label>
                            <RadioGroup row defaultValue="1">
                                <FormControlLabel value="1" control={<Radio />} label="0-5" />
                                <FormControlLabel value="2" control={<Radio />} label="5-10" />
                                <FormControlLabel value="3" control={<Radio />} label="10 & above" />
                            </RadioGroup>
                            <label>What is your Experience</label>
                            <RadioGroup row defaultValue="java">
                                <FormControlLabel value="java" control={<Radio />} label="Java" />
                                <FormControlLabel value="react" control={<Radio />} label="React" />
                                <FormControlLabel value="backend" control={<Radio />} label="Backend"/>
                            </RadioGroup>
                            <label>Mention your Role</label><br/>
                            <TextField variant='standard' style={{width:'50%'}}></TextField>
                        </Paper><br/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='primary' style={{marginRight:'4%',float:'right'}}>Save</Button>
                    </Grid>
                  
                </Grid>
            </FormControl>
        </Paper>
    </div>
   </React.Fragment>
  )
}

export default Profile
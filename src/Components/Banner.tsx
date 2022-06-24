import { Box } from '@mui/material';
import React, { useState } from 'react'
import './Banner.css'

interface Message{
  message:string
}

function Banner(props: React.PropsWithChildren<Message>) {
  // const [message,setmsg] = useState('');
  const { message } = props;
  return (
    <Box className='banner'>
        <p>{message}</p>
    </Box>
  )
}

export default Banner
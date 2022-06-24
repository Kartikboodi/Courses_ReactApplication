import { Close } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton, Box,Alert, AlertTitle, AlertColor } from '@mui/material';
import React, { useState } from 'react'
import './DialogAlert.css'

function DialogAlert(props:any) {

    const { onClose,selectedValue, open } = props;
    const [alertType,SetType] = useState(props.alertType)
    const [title,setTitle] = useState(props.title);
    const [message,setMessage] = useState(props.message);

    const handleClose = () => {
         onClose(selectedValue);
    };
    
    return (
        <Dialog onClose={handleClose} open={open}>        
             <Alert severity={alertType as AlertColor} style={{width:'30rem',textAlign:'center'}}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Dialog>
    );
}

export default DialogAlert
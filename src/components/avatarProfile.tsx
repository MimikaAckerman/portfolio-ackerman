import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './style/allStyle.css'
import { Typography } from '@mui/material';
export default function AvatarProfile() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar 
      alt="Remy Sharp"
       src={`${process.env.PUBLIC_URL}/perfil.jpeg`} 
       sx={{ width: 90, height: 90 }}
       className='avatar-profile'/>

       <div className='profile-details'>
       <Typography variant='h6' style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Emily Herrera</Typography>
       <Typography variant='h6' style={{ fontFamily: 'IBM Plex Mono, monospace' ,fontSize:'13px',color:'grey'}}>We become what think about</Typography>
       </div>
      

        <img
        src="https://framerusercontent.com/images/QEjdiWp4h6TKmCavBQooqgU8q8.png?scale-down-to=512"
        alt="Imagen inferior"
        style={{ width: '100%' ,marginTop:'-1%',left:'10%'}}
      />

      
    </Stack>
  );
}


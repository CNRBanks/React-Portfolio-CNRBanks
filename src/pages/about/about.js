import React from 'react';
// eslint-disable-next-line 
import Box from '@mui/material/Box';
// eslint-disable-next-line 
import Paper from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import miFoto from '../../assets/miFoto.png';




const AboutMe = () => {
    return (
        <>
        <h1>TEST</h1>
        <div>
            <Grid container>
                <Grid item xs={10} md={4}>
                <Avatar alt="My Photo" src={miFoto} sx={{width: 2, height: 2}}></Avatar>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default AboutMe 
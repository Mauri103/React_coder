import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Spinner.css"

export default function Spinner() {
  return (
    <div className='d-flex justify-content-center spinner'>
        <Box sx={{ }}>
        <CircularProgress />
        </Box>
    </div>
  );
}
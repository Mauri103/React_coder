import React from 'react';
import Button from '@mui/material/Button';


const AddCartButton = () => {
  return (
    <div className='boton'>
        <Button sx={{color: 'black', background: '#e3fc02cf'}} variant="contained" color="primary">
            Agregar al carrito
        </Button>
    </div>
  )
}

export default AddCartButton
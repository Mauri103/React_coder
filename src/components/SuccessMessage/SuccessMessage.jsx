import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessMessage = ({id}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Se ha generado la factura con el número de referencia {id}</Alert>
    </Stack>
  );
}

export default SuccessMessage;
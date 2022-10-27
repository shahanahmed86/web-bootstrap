import React from 'react';
import Grid from '@mui/material/Grid';

function LeftComponent() {
  return (
    <Grid
      item
      xs={false}
      sm={6}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default LeftComponent;

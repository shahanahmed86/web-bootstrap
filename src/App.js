import CssBaseline from '@mui/material/CssBaseline';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import Navigation from './infrastructure/navigation';
import Theme from './infrastructure/theme';

function App() {
  return (
    <Theme>
      <Fragment>
        <CssBaseline />
        <Navigation />
        <ToastContainer />
      </Fragment>
    </Theme>
  );
}

export default App;

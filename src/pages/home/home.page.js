import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { lazy, Suspense, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LoaderComponent from '../../components/loader/loader.component';
import styles from './home.module.scss';

const Spacer = lazy(() => import('../../components/spacer/spacer.component'));
const LeftComponent = lazy(() => import('./components/left.component'));
const LoginComponent = lazy(() => import('./components/login.component'));
const SignUpComponent = lazy(() => import('./components/signup.component'));

function SignUpPage() {
  const location = useLocation();

  const title = useMemo(
    () => (location.pathname === '/signup' ? 'Sign Up' : 'Sign In'),
    [location]
  );
  return (
    <Grid container className={styles.container}>
      <Suspense fallback={<LoaderComponent />}>
        <LeftComponent />
      </Suspense>
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        container
        alignItems='center'
        justifyContent='center'
        className={styles['right-box']}
      >
        <div className={styles['routes-wrapper']}>
          <Suspense fallback={<LoaderComponent />}>
            <Typography
              variant='h4'
              color='secondary'
              display='block'
              align='center'
            >{`${title} Form`}</Typography>
            <Spacer position='marginBottom' />

            <Routes>
              <Route exact path='/' element={<LoginComponent />} />
              <Route exact path='/signup' element={<SignUpComponent />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Suspense>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUpPage;

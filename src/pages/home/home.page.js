import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Spacer from '../../components/spacer/spacer.component';
import LoginComponent from './components/login.component';
import SignUpComponent from './components/signup.component';
import styles from './home.module.scss';
import LeftComponent from './components/left.component';

function SignUpPage() {
	const location = useLocation();
	return (
		<Grid container className={styles.container}>
			<LeftComponent />
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
					<Typography
						children={`${location.pathname === '/signup' ? 'Sign Up' : 'Sign In'} Form`}
						variant='h4'
						color='secondary'
						display='block'
						align='center'
					/>
					<Spacer position='marginBottom' />

					<Routes>
						<Route exact path='/' element={<LoginComponent />} />
						<Route exact path='/signup' element={<SignUpComponent />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
			</Grid>
		</Grid>
	);
}

export default SignUpPage;

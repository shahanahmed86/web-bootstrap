import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../../pages/login/login.page';
import RegisterPage from '../../pages/register/register.page';

function AuthNavigator() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Router>
	);
}

export default AuthNavigator;

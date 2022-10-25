import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../../pages/dashboard/dashboard.page';

function AppNavigator() {
	return (
		<Router basename='/dashboard'>
			<Routes>
				<Route path='/' element={<DashboardPage />} />
				<Route path='*' element={<Navigate to='/dashboard' />} />
			</Routes>
		</Router>
	);
}

export default AppNavigator;

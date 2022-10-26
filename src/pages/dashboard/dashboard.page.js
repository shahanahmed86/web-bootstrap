import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardComponent from './components/dashboard.component';
import HeaderComponent from './components/header.component';

function DashboardPage() {
	return (
		<Fragment>
			<HeaderComponent />

			<Routes>
				<Route exact path='/dashboard' element={<DashboardComponent />} />
				<Route path='*' element={<Navigate to='/dashboard' />} />
			</Routes>
		</Fragment>
	);
}

export default DashboardPage;

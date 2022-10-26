import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/home/home.page';

function AuthNavigator() {
	return (
		<Router>
			<Routes>
				<Route path='/*' element={<HomePage />} />
			</Routes>
		</Router>
	);
}

export default AuthNavigator;

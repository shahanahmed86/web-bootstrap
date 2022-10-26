import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../../services';
import { authActions } from '../../store/auth';
import AccountNavigator from './account.navigator';
import AppNavigator from './app.navigator';

function Navigation() {
	const auth = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		authService
			.loggedIn()
			.then((res) => {
				if (!res.success) return console.log(res.message);

				dispatch(authActions.onAuth(res.data));
			})
			.finally(() => setLoading(false));
	}, [dispatch]);

	if (loading) return <p>loading...</p>;
	if (auth.isAuthenticated) return <AppNavigator />;
	return <AccountNavigator />;
}

export default Navigation;

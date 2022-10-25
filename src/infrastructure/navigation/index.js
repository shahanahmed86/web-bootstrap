import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigator from './app.navigator';
import AccountNavigator from './account.navigator';
import { authService } from '../../services';
import { authActions } from '../../store/auth';

function Navigation() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		authService
			.loggedIn()
      .then((response) => {
        if (!response.success) {
          console.log('loggedIn catch...', JSON.stringify(response, null, 2));
          return;
        }

				dispatch(authActions.onAuth(response.data));
			})
			.finally(() => setLoading(false));
	}, [dispatch]);

	if (loading) return <p>loading...</p>;
	if (auth.isAuthenticated) return <AppNavigator />;
	return <AccountNavigator />;
}

export default Navigation;

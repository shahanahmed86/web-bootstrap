import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSignal from '../../hooks/signal.hook';
import { authService } from '../../services';
import { authActions } from '../../store/auth';
import AccountNavigator from './account.navigator';
import AppNavigator from './app.navigator';

function Navigation() {
  const signal = useSignal();

  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(() => {
    if (!signal) return;

    authService
      .loggedIn(signal)
      .then((res) => {
        if (!res.success) return console.log(res.message);

        dispatch(authActions.onAuth(res.data));
      })
      .finally(() => setLoading(false));
  }, [dispatch, signal]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) return null;

  if (auth.isAuthenticated) return <AppNavigator />;
  return <AccountNavigator />;
}

export default Navigation;

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../../services';
import { authActions } from '../../store/auth';
import { getController } from '../../utils/helper.util';
import AccountNavigator from './account.navigator';
import AppNavigator from './app.navigator';

/**
 * controller variable
 * @type {AbortController=}
 */
let controller = null;

function Navigation() {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(() => {
    controller = getController(controller);

    authService
      .loggedIn(controller.signal)
      .then((res) => {
        if (!res.success) return console.log(res.message);

        dispatch(authActions.onAuth(res.data));
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // abort on component unmounts
  useEffect(() => {
    return () => {
      if (controller) controller.abort();
    };
  }, []);

  if (loading) return null;

  if (auth.isAuthenticated) return <AppNavigator />;
  return <AccountNavigator />;
}

export default Navigation;

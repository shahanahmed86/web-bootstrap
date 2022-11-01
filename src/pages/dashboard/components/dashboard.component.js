import React, { useCallback } from 'react';
import useSignal from '../../../hooks/signal.hook';
import { authService, commonService } from '../../../services';

function DashboardComponent() {
  const signal = useSignal();

  const checkAuth = useCallback(() => {
    if (!signal) return;

    authService.loggedIn(signal);
  }, [signal]);

  const getGenders = useCallback(() => {
    if (!signal) return;

    commonService.getGenderOptions(signal);
  }, [signal]);
  return (
    <div>
      <h3>DashboardComponent</h3>
      <button onClick={checkAuth}>check session...</button>
      <button onClick={getGenders}>get genders...</button>
    </div>
  );
}

export default DashboardComponent;

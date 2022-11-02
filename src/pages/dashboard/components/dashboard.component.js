import React, { useCallback, useEffect } from 'react';
import { authService, commonService } from '../../../services';

function DashboardComponent() {
  const checkAuth = useCallback(() => {
    authService.loggedIn();
  }, []);

  const getGenders = useCallback(() => {
    commonService.getGenderOptions();
  }, []);

  useEffect(() => {
    return () => {
      commonService.getGenderOptionsController.abort();
      authService.loggedInController.abort();
    };
  }, []);
  return (
    <div>
      <h3>DashboardComponent</h3>
      <button onClick={checkAuth}>check session...</button>
      <button onClick={getGenders}>get genders...</button>
    </div>
  );
}

export default DashboardComponent;

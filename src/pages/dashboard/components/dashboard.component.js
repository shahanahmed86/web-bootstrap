import React, { useEffect } from 'react';
import { authService, commonService } from '../../../services';
import { getController } from '../../../utils/helper.util';

/**
 * controller variable
 * @type {AbortController=}
 */
let controller = null;

function DashboardComponent() {
  const checkAuth = () => {
    controller = getController(controller);

    authService.loggedIn(controller.signal);
  };

  const getGenders = () => {
    controller = getController(controller);

    commonService.getGenderOptions(controller.signal);
  };

  // abort on component unmounts
  useEffect(() => {
    return () => {
      if (controller) controller.abort();
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

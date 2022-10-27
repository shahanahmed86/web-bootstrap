import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from '../../pages/dashboard/dashboard.page';

function AppNavigator() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default AppNavigator;

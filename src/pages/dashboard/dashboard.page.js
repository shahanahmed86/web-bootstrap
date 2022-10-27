import React, { Fragment, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoaderComponent from '../../components/loader/loader.component';

const DashboardComponent = lazy(() => import('./components/dashboard.component'));
const HeaderComponent = lazy(() => import('./components/header.component'));

function DashboardPage() {
  return (
    <Fragment>
      <Suspense fallback={<LoaderComponent />}>
        <HeaderComponent />
      </Suspense>

      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route exact path='/dashboard' element={<DashboardComponent />} />
          <Route path='*' element={<Navigate to='/dashboard' />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default DashboardPage;

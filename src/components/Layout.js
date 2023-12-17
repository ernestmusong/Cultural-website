import { React, Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('./Header'));
const Layout = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
    <Outlet />
  </>
);

export default Layout;

import React, { lazy, Suspense } from 'react';

const LazyFooterMenu = lazy(() => import('./FooterMenu'));

const FooterMenu = props => (
  <Suspense fallback={null}>
    <LazyFooterMenu {...props} />
  </Suspense>
);

export default FooterMenu;

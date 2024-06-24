import React, { lazy, Suspense } from 'react';

const LazyFooterLogo = lazy(() => import('./FooterLogo'));

const FooterLogo = props => (
  <Suspense fallback={null}>
    <LazyFooterLogo {...props} />
  </Suspense>
);

export default FooterLogo;

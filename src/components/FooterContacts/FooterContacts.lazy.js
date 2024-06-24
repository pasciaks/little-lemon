import React, { lazy, Suspense } from 'react';

const LazyFooterContacts = lazy(() => import('./FooterContacts'));

const FooterContacts = props => (
  <Suspense fallback={null}>
    <LazyFooterContacts {...props} />
  </Suspense>
);

export default FooterContacts;

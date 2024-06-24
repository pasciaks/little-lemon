import React, { lazy, Suspense } from 'react';

const LazyFooterSocialLinks = lazy(() => import('./FooterSocialLinks'));

const FooterSocialLinks = props => (
  <Suspense fallback={null}>
    <LazyFooterSocialLinks {...props} />
  </Suspense>
);

export default FooterSocialLinks;

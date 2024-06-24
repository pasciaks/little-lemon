import React, { lazy, Suspense } from 'react';

const LazySpecials = lazy(() => import('./Specials'));

const Specials = props => (
  <Suspense fallback={null}>
    <LazySpecials {...props} />
  </Suspense>
);

export default Specials;

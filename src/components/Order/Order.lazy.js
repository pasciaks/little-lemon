import React, { lazy, Suspense } from 'react';

const LazyOrder = lazy(() => import('./Order'));

const Order = props => (
  <Suspense fallback={null}>
    <LazyOrder {...props} />
  </Suspense>
);

export default Order;

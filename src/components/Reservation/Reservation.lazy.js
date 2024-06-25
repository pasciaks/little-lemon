import React, { lazy, Suspense } from 'react';

const LazyReservation = lazy(() => import('./Reservation'));

const Reservation = props => (
  <Suspense fallback={null}>
    <LazyReservation {...props} />
  </Suspense>
);

export default Reservation;

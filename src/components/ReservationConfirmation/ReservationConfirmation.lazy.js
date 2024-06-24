import React, { lazy, Suspense } from 'react';

const LazyReservationConfirmation = lazy(() => import('./ReservationConfirmation'));

const ReservationConfirmation = props => (
  <Suspense fallback={null}>
    <LazyReservationConfirmation {...props} />
  </Suspense>
);

export default ReservationConfirmation;

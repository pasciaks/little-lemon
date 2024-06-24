import React, { lazy, Suspense } from 'react';

const LazyReservationForm = lazy(() => import('./ReservationForm'));

const ReservationForm = props => (
  <Suspense fallback={null}>
    <LazyReservationForm {...props} />
  </Suspense>
);

export default ReservationForm;

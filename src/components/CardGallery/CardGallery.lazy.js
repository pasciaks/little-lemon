import React, { lazy, Suspense } from 'react';

const LazyCardGallery = lazy(() => import('./CardGallery'));

const CardGallery = props => (
  <Suspense fallback={null}>
    <LazyCardGallery {...props} />
  </Suspense>
);

export default CardGallery;

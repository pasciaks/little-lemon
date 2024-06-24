import React, { lazy, Suspense } from 'react';

const LazyTestimonialCard = lazy(() => import('./TestimonialCard'));

const TestimonialCard = props => (
  <Suspense fallback={null}>
    <LazyTestimonialCard {...props} />
  </Suspense>
);

export default TestimonialCard;

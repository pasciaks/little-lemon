import React, { lazy, Suspense } from 'react';

const LazyFoodMenu = lazy(() => import('./FoodMenu'));

const FoodMenu = props => (
  <Suspense fallback={null}>
    <LazyFoodMenu {...props} />
  </Suspense>
);

export default FoodMenu;

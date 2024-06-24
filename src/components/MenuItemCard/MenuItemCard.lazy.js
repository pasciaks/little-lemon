import React, { lazy, Suspense } from 'react';

const LazyMenuItemCard = lazy(() => import('./MenuItemCard'));

const MenuItemCard = props => (
  <Suspense fallback={null}>
    <LazyMenuItemCard {...props} />
  </Suspense>
);

export default MenuItemCard;

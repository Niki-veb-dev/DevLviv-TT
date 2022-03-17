import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';

import React, { lazy, Suspense } from 'react';
import { Convert } from './component/Convert';
import { NotFoundPage } from './component/NotFoundPage';
import { Layout } from './component/Layout';

const ExchangesRates = lazy(() => import('./component/ExchangeRates'));

export const App: React.FC = () => {
  const getLazyExchange = () => (
    <Suspense fallback={<span>Loading...</span>}>
      <ExchangesRates />
    </Suspense>
  );

  return (
    <div className="starter">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Convert />} />
          <Route path="rates" element={getLazyExchange()} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

/* eslint-disable react/react-in-jsx-scope */
import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';

import React, { lazy, Suspense } from 'react';
import { HomePage } from './component/HomePage';
import { Convert } from './component/Convert';
import { NotFoundPage } from './component/NotFoundPage';

const ExchangesRates = lazy(() => import('./component/ExchangeRates'));

export const App: React.FC = () => {
  const getLazyExchange = () => (
    <Suspense fallback={<span>Loading...</span>}>
      <ExchangesRates />
    </Suspense>
  );

  return (
    <div className="starter">
      <HomePage />

      <Routes>
        <Route path="/" element={<Convert />} />
        <Route path="/rates" element={getLazyExchange()} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

/* eslint-disable react/react-in-jsx-scope */
import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { HomePage } from './component/HomePage';
import { Convert } from './component/Convert';
import { NotFoundPage } from './component/NotFoundPage';
import { ExchangesRates } from './component/ExchangeRates';

export const App: React.FC = () => (
  <div className="starter">
    <HomePage />

    <Routes>
      <Route path="/" element={<Convert />} />
      <Route path="/rates" element={<ExchangesRates />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

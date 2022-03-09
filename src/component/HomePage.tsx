import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocation } from '../api/location';
import { getRate } from '../api/rate';
import { loadCode, loadRates } from '../store/actions';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const loadIp = async () => {
    const codeLocation = await getLocation();

    return codeLocation;
  };

  const loadData = async () => {
    const [ratesFromServer, codeLocation] = await Promise.all([getRate(), loadIp()]);

    dispatch(loadCode(codeLocation));
    dispatch(loadRates(ratesFromServer.rates));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <h1 className="navbar-item">Exchange rates</h1>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link
              to="/"
              className="button is-primary"
            >
              Convert
            </Link>
            <Link
              to="/rates"
              className="button is-primary"
            >
              Exchanges rates
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
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

  const setActive = ({ isActive }: { isActive: boolean }) => {
    const defaultClass = 'button';

    if (isActive) {
      return `${defaultClass} active-link is-primary`;
    }

    return defaultClass;
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
            <NavLink
              to="/"
              className={setActive}
            >
              Convert
            </NavLink>
            <NavLink
              to="/rates"
              className={setActive}
            >
              Exchanges rates
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

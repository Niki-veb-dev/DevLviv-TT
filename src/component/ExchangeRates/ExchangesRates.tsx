/* eslint-disable max-len */
/* eslint-disable no-shadow */
import React, {
  Suspense,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCode } from '../../store/actions';
import { getRates, getUserCode } from '../../store/selectors';

export const ExchangesRates: React.FC = () => {
  const dispatch = useDispatch();
  const { rates } = useSelector(getRates);
  const rateFrom = useSelector(getUserCode);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(loadCode(event.target.value));
  };

  const calculateExchange = (to: string) => {
    return ((rates.EUR * rates[rateFrom]) / rates[to]);
  };

  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <div className="box">
        <div className="select">
          <select
            onChange={handleOnChange}
            defaultValue={rateFrom}
          >
            <option value={rateFrom} hidden>{rateFrom}</option>
            {Object.keys(rates).map((rate) => (
              <option key={rate} value={rate}>{rate}</option>
            ))}
          </select>
        </div>

        <ul>
          {Object.keys(rates).map((rate) => (
            <li key={rate}>
              {`1 - ${rate} = ${calculateExchange(rate).toFixed(3)} ${rateFrom}`}
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

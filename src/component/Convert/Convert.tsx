import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getRates } from '../../store/selectors';
import './Convert.scss';

export const Convert: React.FC = () => {
  const { rates } = useSelector(getRates);
  const [request, setRequest] = useState('');
  const [convertedValue, setConvertedValue] = useState(0);
  const [requestError, setRequestError] = useState(false);
  const [{ moneyAmount, exchangeFrom, exchangeTo }, setInfo] = useState<ExchangeInfo>({
    moneyAmount: 0,
    exchangeFrom: '',
    exchangeTo: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequestError(false);
    setRequest(event.target.value);
  };

  const calculateExchange = (
    amount: number,
    from: string,
    to: string,
  ) => {
    setConvertedValue((amount / rates[from]) * rates[to]);
  };

  const getConvertedValue = (event: React.FormEvent) => {
    event.preventDefault();

    const info = request.trim().split(' ');
    const regex = /\d+\s\w{3}\sto\s\w{3}/;

    if (regex.test(request)) {
      setRequestError(false);

      setInfo({
        moneyAmount: +info[0],
        exchangeFrom: info[1].toUpperCase(),
        exchangeTo: info[3].toUpperCase(),
      });

      calculateExchange(+info[0], info[1].toUpperCase(), info[3].toUpperCase());
    } else {
      setRequestError(true);
    }

    setRequest('');
  };

  return (
    <>
      <br />
      <form onSubmit={getConvertedValue} className="form">
        <h2 className="form__title">enter text like a 15 USD to UAH</h2>
        <input
          type="text"
          value={request}
          className="input form__input"
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className="button is-primary form__button"
        >
          Get rate
        </button>
        {requestError && <p>Error input enter for example 15 USD to UAH</p>}
        {!!convertedValue && !requestError && (
          <p>
            {`${moneyAmount} ${exchangeFrom} is equal 
          ${convertedValue.toFixed(2)} ${exchangeTo}`}
          </p>
        )}
      </form>
    </>
  );
};

/// <reference types="react-scripts" />

type ExchangeInfo = {
  moneyAmount: number,
  exchangeFrom: string,
  exchangeTo: string,
};

type State = {
  rates: Rates,
  code: string,
};

type ExchangeRates = {
  rates: Rates
};

type Rates = {
  [key: string]: number
};

type Codes = {
  [key: string]: string
};

type UserLocation = {
  countryCode: string;
};

export const LOAD_RATES = 'LOAD_RATES';
export const LOAD_EXCHANGE_RATES = 'LOAD_EXCHANGE_RATES';
export const LOAD_CODE = 'LOAD_CODE';

export const loadRates = (payload: any) => ({
  type: LOAD_RATES,
  payload,
});

export const loadCode = (payload: any) => ({
  type: LOAD_CODE,
  payload,
});

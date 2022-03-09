const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=59b85c9635f7d60dd3237c1b1a6519e8';

export async function getRate(): Promise<ExchangeRates> {
  const result = await fetch(url);

  return result.json();
}

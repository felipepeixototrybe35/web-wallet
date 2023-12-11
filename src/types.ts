export type UserType = {
  type: string;
  payload: string;
};
export type StateWalletType = {
  currencies: string[],
  expenses: ExpensesType[],
  editor: boolean,
  idEdit: number,
};

export type WalletType = {
  wallet: StateWalletType
};

export type ExchangeRates = {
  [currencyCode: string]: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  }
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: { [key: string] : { ask: string } },
};

export type FormType = {
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
};

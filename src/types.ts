export type UserType = {
  type: string;
  payload: string;
};

export type WalletType = {
  currencies: string[],
  expenses: [],
  editor: false,
  idEdit: number,
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: any,
};

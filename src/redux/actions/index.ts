import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ExpensesType } from '../../types';
import { API } from '../../components/Api';
// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const EXPENSES = 'EXPENSES';
export const CURRENCY = 'CURRENCY';

export const saveEmail = (email: string) => ({
  type: EMAIL,
  payload: email,
});

export const saveExepenses = (expenses: Omit<ExpensesType, 'id'>) => ({
  type: EXPENSES,
  expenses,
});

export const saveCurrency = (currencies: string[]) => ({
  type: CURRENCY,
  payload: currencies,
});

export const currenciesAPI = () => {
  return async (dispatch: ThunkDispatch<object, object, AnyAction>) => {
    try {
      const data = await API();
      const result = Object.keys(data).filter((e: any) => e !== 'USDT');
      dispatch(saveCurrency(result));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const expensesAPI = (expenses: ExpensesType) => ({
  type: EXPENSES,
  expenses,
});

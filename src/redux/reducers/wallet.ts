// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { CURRENCY, EXPENSES } from '../actions';
import { StateWalletType } from '../../types';

const INITIAL_STATE: StateWalletType = {
  currencies: [],
  expenses: [],
  editor: false,
  idEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CURRENCY:
      return { ...state, currencies: action.payload };
    case EXPENSES:
      return { ...state,
        expenses: [
          ...state.expenses,
          { id: state.expenses.length
            ? state.expenses[state.expenses.length - 1].id + 1 : 0,
          ...action.expenses }],
      };
    default:
      return state;
  }
};

export default walletReducer;

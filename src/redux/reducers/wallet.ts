// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

import { Action } from 'history';
import { CURRENCY, EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CURRENCY:
      return { ...state, currencies: action.payload };
    default:
      return state;
  }
};

export default walletReducer;

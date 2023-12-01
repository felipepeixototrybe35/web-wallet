// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (action.type === 'EMAIL') {
    return { ...state, email: '' };
  }
  return state;
};

export default userReducer;

// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { EMAIL } from '../actions';

type ActionType = {
  type: string;
  payload: string;
};

const INITIAL_STATE = {
  email: '',
};
const userReducer = (state = INITIAL_STATE, action: ActionType) => {
  if (action.type === EMAIL) {
    return { ...state, email: action.payload };
  }
  return state;
};

export default userReducer;

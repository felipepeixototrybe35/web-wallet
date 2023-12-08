// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { EMAIL } from '../actions';
import { UserType } from '../../types';

const INITIAL_STATE = {
  email: '',
};
const userReducer = (state = INITIAL_STATE, action: UserType) => {
  if (action.type === EMAIL) {
    return { ...state, email: action.payload };
  }
  return state;
};

export default userReducer;

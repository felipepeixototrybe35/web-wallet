import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// export default () => {};// delete essa linha e configure os seus reducers
const rootReducer = combineReducers({
  user, wallet,
});

export default rootReducer;

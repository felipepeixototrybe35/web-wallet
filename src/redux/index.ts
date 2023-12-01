// configure aqui sua store
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { useReducer } from 'react';


const store = createStore(useReducer, composeWithDevTools());

export default store;
import {createStore} from 'redux';
import { reducer } from './Reducers/main';

const store=createStore(reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
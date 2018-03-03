import {createStore} from 'redux';
import state from './initialState';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(rootReducer,state,
    composeWithDevTools()
    );

export default store;
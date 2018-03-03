import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import filesReducer from './filesReducer';

const rootReducer = combineReducers({
    routing:routerReducer,
    filesData:filesReducer
});

export default rootReducer;

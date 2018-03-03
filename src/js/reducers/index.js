import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import explorer from './explorerReducer';
import editor from './editorReducer';

const rootReducer = combineReducers({
    routing:routerReducer,
    explorer,
    editor,
});

export default rootReducer;

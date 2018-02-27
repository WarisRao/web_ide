import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import history from '../history';
import store from '../store/index';
import App from './App';

export default class Root extends React.Component{
    render(){
        return(
            <Provider store={store} >
                <Router history={history} >
                    <App/>
                </Router>
            </Provider>
        )
    }
}
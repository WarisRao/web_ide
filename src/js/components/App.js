import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import AboutPage from './About';
import NotFoundPage from './NotFound';
import MainPage from './Main';

export default class App extends React.Component{

    render(){
        return(
        <div>

            <ul>
                <li>
                    <Link  to='/'>Home</Link>
                </li>
                <li>
                    <Link  to='/main'>Main</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                
            </ul>

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={LoginPage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/main' component={MainPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        )
    }
}
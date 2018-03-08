import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import AboutPage from './About';
import NotFoundPage from './NotFound';
import MainPage from './Main';
import '../../css/app.css';

export default class App extends React.Component{

    render(){
        return(
        <div>
            <div className="header" >
            <ul id="headerUl">
                <li id="homeLi">
                    <Link  to='/'>Home</Link>
                </li>
                <li id="mainLi" >
                    <Link  to='/main'>Main</Link>
                </li>
                <li id="loginLi" >
                    <Link to='/login'>Login</Link>
                </li>
                <li id="aboutLi" >
                    <Link to='/about'>About</Link>
                </li>
                
            </ul>
            </div>

            <div className="routes" >
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={LoginPage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/main' component={MainPage} />
                <Route component={NotFoundPage}/>
            </Switch>
            </div>
        </div>
        )
    }
}
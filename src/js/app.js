import React, {Component} from 'react' ;
import {render} from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/keen.png';

console.log('sfdsfs');

export default class Hello extends Component{
    render(){
        return (
            <div>
                Hello from react

                <img src={keenImage} alt="Commander keen"/>

            </div>
        );
    }
}

render(<Hello/>,document.getElementById('app'));
import React from 'react';

import UpperTab from './UpperTab';
import Explorer from './Explorer';
import Editor from './Editor';
import '../../css/main.css';
export default class Main extends React.Component{
    render(){
        return(
            <div className="main">
               <div className="upperTab" > <UpperTab/> </div>
            
               <div className="explorer" > <Explorer/> </div>
               <div className="editor" > <Editor/> </div>
        
            </div>
        );
    }
}


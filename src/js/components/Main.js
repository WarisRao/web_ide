import React from 'react';

import UpperTab from './UpperTab';
import Explorer from './Explorer';
import Editor from './Editor';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <UpperTab/>
                <Explorer/>
                <Editor/>
            </div>
        );
    }
}


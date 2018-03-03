import React from 'react';
import EditorMarkup from './EditorMarkup';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import editroActions from '../actions/editorActions';

import '../../css/editor.css'

const mapStateToProps = (state)=>{
    return {state:state.filesData};
}

const mapDispatchToProps = (dispatch)=>({
    editroActions:bindActionCreators(editroActions,dispatch)
});
class Editor extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            data:''
        }
        this.save=this.save.bind(this);
        this.dataChange=this.dataChange.bind(this);
    }

    dataChange(e){
        let data=e.target.textContent;
        this.setState({data});
    }

    save(e){
        let data=this.state.data;
        this.props.editroActions.saveFile({data});
        
    }

    render(){

        return(
            <EditorMarkup 
                state={this.props.state}
                onDataChange={this.dataChange}
                onSave={this.save}
                />
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor);


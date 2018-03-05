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
            files:[]
        }
        this.save=this.save.bind(this);
        this.dataChange=this.dataChange.bind(this);
    }

    
    dataChange(e){
        
        let data=e.target.textContent;
        
        console.log('state in change before:',this.state);

        this.setState(()=>{
            return {files:[...this.props.state.openedFiles]}
        });
       
        console.log('state in change imid:',this.state);

        const newState = Object.assign({},this.state);
        
    /*   newState.files.forEach((file)=>{
            
            if(file.name === this.props.state.currentFile.name){
                file.data=data;
            }
        
        });

         this.setState(()=>{
           return newState;
        });
        
        console.log('state in change after:',this.state);
*/    
    }


    save(e){
        let data;
        console.log('stataaa:',this.state);

        this.state.files.forEach((file)=>{
            if(file.name===this.props.state.currentFile.name){
                data=file.data;
            }
        });

        console.log('data:',data);

        this.props.editroActions.saveFile({data});
        
    }

    render(){

        let currentFile;
        
        currentFile=this.props.state.currentFile;
        
        if(this.state.files.length>0){
            this.state.files.forEach((file)=>{
                if(file.name===this.props.state.currentFile.name){
                    currentFile=file;
                }
            });
        }

        return(
            <EditorMarkup
                currentFile={currentFile} 
                superState={this.props.state}
                onDataChange={this.dataChange}
                onSave={this.save}
                />
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor);


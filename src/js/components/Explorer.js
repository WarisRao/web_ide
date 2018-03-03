import React from 'react';
import ExplorerMarkup from './ExplorerMarkup';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import explorerActions from '../actions/explorerActions';

import '../../css/explorer.css';

const mapStateToProps =(state)=>{
    
    return {state:state.filesData};
}
 
 const mapDispatchToProps=(dispatch)=>({
     explorerActions:bindActionCreators(explorerActions, dispatch)
 });
 class Explorer extends React.Component{
    constructor(props){
        super(props);
        this.state={
           name:'',
           edit:false, 
        };
        
        this.fileEdit=this.fileEdit.bind(this);
        this.fileSelect=this.fileSelect.bind(this);
        this.createNew=this.createNew.bind(this);
    }

    fileEdit(e){
        const index=e.target.getAttribute('data-number');
   
        if(!e.target.name){
           let fileName=e.target.textContent;
           this.props.explorerActions.renameFile({index,fileName});
        }
    
        switch(e.target.name){
            case 'deleteFile':
                this.props.explorerActions.deleteFile({index});
                break;
            
            case 'renameFile': 
                this.props.explorerActions.renameFile({index});
                break;

        }
    }

    fileSelect(e){
        const index=Number(e.target.getAttribute('data-number'));
        this.props.explorerActions.selectFile({index});
    }

    createNew(event){
        
        switch(event.target.name){

            case 'fileNameInput':
                this.setState({name:event.target.value});
                break;

            case 'addFileButton':
                if(this.state.name)
                {
                    this.props.explorerActions.addFile({
                        name:this.state.name,
                        data:''
                    });
                }
                this.setState({edit:!this.state.edit,name:''});
                break;
            
            case 'createFileButton':
                this.setState({edit:!this.state.edit});
        }
        
    }

    render(){
        return(
            <ExplorerMarkup 
                newFileState={this.state}
                state={this.props.state}
                onCreate={this.createNew}
                onFileSelect={this.fileSelect}
                onFileEdit={this.fileEdit}
                />
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Explorer);



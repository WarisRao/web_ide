import React from 'react';
import UpperTabMarkup from './UpperTabMarkup';
import {connect} from 'react-redux';
import {bindActionCreators, combineReducers} from 'redux';
import upperTabActions from '../actions/upperTabActions';   

import '../../css/upperTab.css';
 class UpperTab extends React.Component{
    constructor(props){
        super(props);

        this.fileClose=this.fileClose.bind(this);
        this.fileSelect=this.fileSelect.bind(this);
    }
    
    fileSelect(e){
        const index=Number(e.target.getAttribute('data-number'));
        this.props.upperTabActions.selectFile({index,origin:'upperTab'});
    }

    fileClose(e){
        let index=Number(e.target.getAttribute('data-number'));
        this.props.upperTabActions.closeFile({index});
    }

    render(){
        return(
            <UpperTabMarkup
                state={this.props.state}
                onFileClose={this.fileClose}
                onFileSelect={this.fileSelect}
                />
        )
    }
}




const mapStateToProps = (state)=>{
    return {
        state:state.filesData,
    }
};

const mapDispatchToProps = (dispatch)=>({
    upperTabActions:bindActionCreators(upperTabActions,dispatch)
});



export default connect(mapStateToProps,mapDispatchToProps)(UpperTab);
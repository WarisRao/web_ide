import * as actionTypes from '../actions/actionTypes';

const explorer =(state={},action)=>{
    switch(action.type){
        
        case actionTypes.ADD_FILE :
            const newState1=Object.assign({},state);
            newState1.files=[...newState1.files,action.payload];
            return newState1;

       
        case actionTypes.SELECT_FILE:
            const newState2=Object.assign({},state);
            newState2.currentFile=newState2.files[action.payload.index];
            return newState2;

        case actionTypes.DELETE_FILE:
            const newState3=Object.assign({},state);
            newState3.files=[...newState3.files.slice(0,action.payload.index),...newState3.files.slice(action.payload.index+1)];
            return newState3;

        case actionTypes.RENAME_FILE:
            const newState4=Object.assign({},state);
            
            if(!newState4.files[action.payload.index].edit){
                newState4.files[action.payload.index].edit=true;
            }
            else{
                if(action.payload.fileName){
                    newState4.files[action.payload.index].name=action.payload.fileName;
                }
                else{
                    newState4.files[action.payload.index].edit=false;
                }
            }
            console.log('newstate4',newState4);
            return newState4;

        default:
            return state;
    }
};

export default explorer;
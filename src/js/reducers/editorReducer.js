import * as actionTypes from '../actions/actionTypes';

const editor = (state={},action)=>{
    console.log('state in reducer in editro:',state);
    switch(action.type){

        case actionTypes.SAVE_FILE:
            return state;

        default:
            return state;
    }

};

export default editor;
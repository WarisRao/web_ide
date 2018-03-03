import * as actionTypes from '../actions/actionTypes';

export default {
    
    selectFile:(payload)=>{
        return{
            type:actionTypes.SELECT_FILE,
            payload
        }
    },
    
    closeFile:(payload)=>{
        return{
            type:actionTypes.CLOSE_FILE,
            payload
        }
    },


}

import * as actionTypes from './actionTypes';

export default {
    saveFile:(payload)=>{
        return {
            type:actionTypes.SAVE_FILE,
            payload
        }
    },

}
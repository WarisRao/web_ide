import * as actionTypes from './actionTypes';

export default {
    saveFile:(payload)=>{
        console.log('payload in actions:',payload);
        return {
            type:actionTypes.SAVE_FILE,
            payload
        }
    },

}
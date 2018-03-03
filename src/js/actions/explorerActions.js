import * as actionTypes from './actionTypes';

export default {
    addFile: (payload)=>{
        return {
            type:actionTypes.ADD_FILE,
            payload:payload
        }
    },
    selectFile:(payload)=>{
        return {
            type:actionTypes.SELECT_FILE,
            payload
        }
    },
    deleteFile:(payload)=>{
        return {
            type:actionTypes.DELETE_FILE,
            payload
        }
    },
    renameFile:(payload)=>{
        return {
            type:actionTypes.RENAME_FILE,
            payload
        }
    }
}
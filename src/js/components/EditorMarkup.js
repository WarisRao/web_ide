import React from 'react';

const EditorMarkup =({state,onDataChange,onSave})=>{
    return (
     <div style={{'height':'80%'}} > 
        <div id="editor" contentEditable={state.currentFile.name!==""} onInput={onDataChange} >
            {state.currentFile.data}
        </div>
        { state.currentFile.name!=='' && <button name="save" onClick={onSave}>Save</button>}
    </div>
    )
};

export default EditorMarkup;
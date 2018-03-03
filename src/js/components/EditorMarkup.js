import React from 'react';

const EditorMarkup =({state,onDataChange,onSave})=>{
    return (
     <div style={{'height':'80%'}} > 
        <div id="editor" contentEditable="true" onInput={onDataChange} >
            {state.currentFile.data}
        </div>
        <button name="save" onClick={onSave}>Save</button>
    </div>
    )
};

export default EditorMarkup;
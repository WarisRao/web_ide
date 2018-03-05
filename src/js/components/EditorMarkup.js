import React from 'react';

const EditorMarkup =({currentFile,onDataChange,onSave})=>{
    return (
     <div style={{'height':'80%'}} > 
        <div id="editor" contentEditable={currentFile.name!==""} onInput={onDataChange} >
            {currentFile.data}
        </div>
        { currentFile.name!=='' && <button name="save" onClick={onSave}>Save</button>}
    </div>
    )
};

export default EditorMarkup;
import React from 'react';

const ExplorerMarkup =({newFileState,state,onCreate,onFileSelect,onFileEdit})=>{

        const lists=state.files.map((file,index)=>(
        
        <li key={index} contentEditable={file.edit} data-number={index} onDoubleClick={onFileSelect} onInput={onFileEdit} >
            {file.name}
            <button  data-number={index} name="renameFile" onClick={onFileEdit} >Rename</button>
            <button  data-number={index} name="deleteFile" onClick={onFileEdit} >Delete</button>
        </li>
        
        
        ));


    return(
        <div>
            {newFileState.edit && <input type="text" placeholder="enter name of file" name="fileNameInput" onChange={onCreate} /> }
            {!newFileState.edit && <button name="createFileButton" onClick={onCreate}>Create </button>}
            {newFileState.edit && <button name="addFileButton" onClick={onCreate}>Add </button>}
            <ul>
                {lists}   
            </ul>
    </div>
    );
};

export default ExplorerMarkup;
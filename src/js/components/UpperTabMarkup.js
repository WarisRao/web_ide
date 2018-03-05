import React from 'react';

const UpperTabMarkup =({state,onFileClose,onFileSelect})=>{
    
    let tabs =state.openedFiles.map((file,index)=>{
        return (
            <div key={index}>
                <span data-number={index} onDoubleClick={onFileSelect} >
                    {file.name}       
                </span>
                <button data-number={index} onClick={onFileClose}>close</button>
            </div>
        );
    });
    
    return(
    <div>
        {tabs}
    </div>
    );
};

export default UpperTabMarkup;

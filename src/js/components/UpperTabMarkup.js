import React from 'react';

const UpperTabMarkup =({state,onFileClose,onFileSelect})=>{
    
    let tabs =state.openedFiles.map((file,index)=>{
        return (
            <span key={index} data-number={index} onDoubleClick={onFileSelect} >
                {file.name}  
                <button data-number={index} onClick={onFileClose}>close</button> 
            </span>
        );
    });
    
    return(
    <div>
        {tabs}
    </div>
    );
};

export default UpperTabMarkup;

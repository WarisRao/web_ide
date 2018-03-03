const initialState= {
    explorer:{ 
        files:[{
            name:'firstFile',
            data:'this is file1 data',
            edit:false
        },
        {
            name:'secondFile',
            data:'this is file2 data',
            edit:false
        }
        ],
        currentFile:{
            name:'',
            data:''
        },
    }
};

export default initialState;
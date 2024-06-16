import {createSlice} from 'redux-toolkit';

const initialValues = {
    user:null,
    loading:false,
    error:null,
    products:[]
}


const userSlice = createSlice({
    name:'user',
    initialValues :initialValues,
    reducers:{
        registerUser:(action,payload) =>{
            
        }

    }
})
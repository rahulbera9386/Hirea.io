import { createSlice } from "@reduxjs/toolkit";


const initialState={
    allJobs:[],
    singleJob:null,
    searchJobByText:"",
    allAdminJobs:[]
}
const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
        setAllJobs:(state,action)=>{
            state.allJobs=action.payload;
        },
        setSingleJob:(state,action)=>{
            state.singleJob=action.payload;
        },
        setSearchByText:(state,action)=>{
            state.searchJobByText=action.payload
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs=action.payload
        }
    }
})


export const {setAllJobs,setSingleJob,setSearchByText,setAllAdminJobs}=jobSlice.actions;

export default jobSlice.reducer;
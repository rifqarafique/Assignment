import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "task",
    initialState:{taskData: []},
    reducers:{
        setTask: (initialState, {payload:{taskData}})=>{
            initialState.taskData = taskData
        }
    }
})
export const {setTask} = slice.actions

export default slice.reducer
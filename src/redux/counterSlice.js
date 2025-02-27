import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"count",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            if(state.count>0){
                state.count--
            }
        },
        reset:(state)=>{
            return {...state,count:0}
        },
        incrementByAmount:(state,valueFromComponent)=>{
            state.count+= +valueFromComponent.payload
        }
    }


})

export const {increment,decrement,reset,incrementByAmount} =counterSlice.actions;
export default counterSlice.reducer;
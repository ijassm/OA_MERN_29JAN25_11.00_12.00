import { createSlice } from "@reduxjs/toolkit";

const initialState = 0


const counterSlice = createSlice(
    {
        name: "counter",
        initialState,
        reducers: {
            increment: (state, action) => {
                // console.log(state + action.payload);
                return action.payload
            },
            decrement: (state, action) => {
                // console.log(state + action.payload);
                return state - action.payload
            },
            reset: (state, action) => {
                return 0
            }
        }
    }
)

export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
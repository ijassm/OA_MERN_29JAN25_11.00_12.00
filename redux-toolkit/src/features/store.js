import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./services/slice/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
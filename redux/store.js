import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter";

const store = configureStore({
    reducer: {
        filter: filterSlice
    }
})

export default store
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "../api/api";


const rootReducer= combineReducers({
    [api.reducerPath]:api.reducer
})

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
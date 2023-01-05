import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore} from "redux-persist";
import {setupListeners} from "@reduxjs/toolkit/query";
import task from "./Task";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    task
})
 
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["task"]
}



const persistedReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducers

})

const peristedStore = persistStore(store)

setupListeners(store.dispatch)//need to discuss

export {store, peristedStore}
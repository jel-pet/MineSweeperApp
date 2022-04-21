import {combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'

import boardReducer from "./board/reducer";
import {watchOnSocketEvents} from "./board/sagas";
import {configureStore} from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    board: boardReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watchOnSocketEvents as any)

export default store;

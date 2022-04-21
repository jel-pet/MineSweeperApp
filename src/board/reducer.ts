import {createReducer} from '@reduxjs/toolkit'
import {GET_MAP, STATUS} from "./actions";

interface State {
    board: string,
    status: string
}

const initialState: State = {
    board: "",
    status: ""
}

const boardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_MAP, (state, action: any) => {
            return {...state, board: action.payload}
        })
        .addCase(STATUS, (state, action: any) => {
            return {...state, status: action.payload}
        })
})


export default boardReducer

import {apply, call, fork, put, take, takeEvery} from 'redux-saga/effects'
import {Channel, END, EventChannel, eventChannel} from 'redux-saga'
import config from "../config";
import {GET_MAP, PREVIOUS_COMMAND, SEND_MESSAGE, SendMessageType, STATUS} from "./actions";
import {GetMapCommand, OpenCommand} from "./commands";

export function createWebSocketConnection(): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket(config.WS_URL);

        socket.onopen = function () {
            resolve(socket);
        };

        socket.onerror = function (evt) {
            reject(evt);
        }
    });
}

export function createSocketChannel(socket: WebSocket): EventChannel<WebSocket> {
    return eventChannel(emit => {
        socket.onmessage = (event) => {
            emit(event.data)
        };

        socket.onclose = () => {
            emit(END);
        };

        return () => {
            socket.onmessage = null;
        };
    });
}


export function* sendMessage(socket: WebSocket) {
    yield takeEvery(SEND_MESSAGE, function* (message: SendMessageType) {
        try{
            const {payload} = message;
            yield put({type: PREVIOUS_COMMAND, payload});
            yield apply(socket, socket.send, [payload.toStringCommand()])
        }catch(error){
            yield put({type: PREVIOUS_COMMAND, payload: "" });
        }
    });
}


export function* listenForMessages(socketChannel: EventChannel<WebSocket>) {
    yield takeEvery(PREVIOUS_COMMAND, function* (prev: SendMessageType) {
        try{
        const payload: string = yield take(socketChannel)
        if (prev.payload instanceof GetMapCommand) {
            yield put({type: GET_MAP, payload})
        } else if (prev.payload instanceof OpenCommand) {
            yield put({type: STATUS, payload})
        }
    }catch(error){
        console.log(error);
    }
    })
}

export function* watchOnSocketEvents() {
    const socket: WebSocket = yield call(createWebSocketConnection)
    const socketChannel: Channel<WebSocket> = yield call(createSocketChannel, socket)

    yield fork(sendMessage, socket)
    yield fork(listenForMessages, socketChannel)

}







import AbstractCommand, {GetMapCommand, NewGameCommand, OpenCommand} from "./commands";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const PREVIOUS_COMMAND = "PREVIOUS_COMMAND";
export const GET_MAP = "GET_MAP";
export const STATUS = "STATUS";

export interface SendMessageType {
    type: string,
    payload: AbstractCommand
}

export function sendMessage(message: AbstractCommand): SendMessageType {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}

export function getMap(): SendMessageType {
    return sendMessage(new GetMapCommand());
}

export function open(x: number, y: number): SendMessageType {
    return sendMessage(new OpenCommand(x, y));
}

export function newGame(difficulty: number): SendMessageType {
    return sendMessage(new NewGameCommand(difficulty));
}
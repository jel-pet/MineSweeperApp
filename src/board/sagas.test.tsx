import WS from "jest-websocket-mock";
import { Server } from "mock-socket";
import { createWebSocketConnection, sendMessage, watchOnSocketEvents } from './sagas';
import { PREVIOUS_COMMAND, SEND_MESSAGE } from './actions';
import { expectSaga } from 'redux-saga-test-plan';
import { GetMapCommand, NewGameCommand, OpenCommand } from './commands';


test("the server keeps track of received messages, and yields them as they come in", async () => {
  const server = new WS("wss://hometask.eg1236.com/game1/");
  const client = new WebSocket("wss://hometask.eg1236.com/game1/");

  await server.connected;
  client.send("help");
  await expect(server).toReceiveMessage("help");
  expect(server).toHaveReceivedMessages(["help"]);
});

describe("Saga websocket communication", () => {
  let fakeURL = "ws://localhost:8080";
  let mockServer: Server;
  
  beforeEach(() => {
    if (mockServer) {
      mockServer.close();
    }

    mockServer = new Server(fakeURL);

    watchOnSocketEvents();
  });

  it("opens cell successfully", async () => {
    const message = new OpenCommand(0,0)
    const socket: WebSocket = await createWebSocketConnection();
    return expectSaga(sendMessage, socket)
    .put({ type: PREVIOUS_COMMAND, payload: message })
    .dispatch({ type: SEND_MESSAGE, payload: message })
    .run();
  });

  
  it("start new game", async () => {
    const message = new NewGameCommand(1)
    const socket: WebSocket = await createWebSocketConnection();
    return expectSaga(sendMessage, socket)
    .put({ type: PREVIOUS_COMMAND, payload: message })
    .dispatch({ type: SEND_MESSAGE, payload: message })
    .run();
  });

  
  it("get map", async () => {
    const message = new GetMapCommand()
    const socket: WebSocket = await createWebSocketConnection();
    return expectSaga(sendMessage, socket)
    .put({ type: PREVIOUS_COMMAND, payload: message })
    .dispatch({ type: SEND_MESSAGE, payload: message })
    .run();
  });


  it("test send message error", async () => {
    const errorMsg = "some random message";
    const errorMsgresponse = "";
    const socket: WebSocket = await createWebSocketConnection();
    return expectSaga(sendMessage, socket)
    .put({ type: PREVIOUS_COMMAND, payload: errorMsgresponse })
    .dispatch({ type: SEND_MESSAGE, payload: errorMsg })
    .run();
  });

});
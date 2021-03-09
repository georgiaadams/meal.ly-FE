import socketIOClient from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_API_URL;

const socket = socketIOClient(ENDPOINT);

export default socket;

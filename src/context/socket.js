import React from "react";
import io from "socket.io-client";

const socketServerUrl =
  process.env.REACT_APP_SOCKET_SERVER_URL || "http://localhost:3000";

const user = JSON.parse(localStorage.getItem("user"));

export const socket = user
  ? io(socketServerUrl, {
      auth: {
        token: user.token,
      },
    })
  : null;

export const SocketContext = React.createContext();

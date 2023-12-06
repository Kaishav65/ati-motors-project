// Point 4 - Websocket status
// The message box has to match the design provided in the header.. If the web-socket server is
// connected, the status displayed has to show connected status.
// Establish a connection to a public WebSocket echo server (e.g: ws://echo.websocket.org,
// wss://demo.piesocket.com).


import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
// Implementing W3CWebSocket websocket 

const Navbar = () => {
  // State to track WebSocket connection status
  const [isWebSocketConnected, setIsWebSocketConnected] = useState(false);

  useEffect(() => {
    // Establishing WebSocket connection with Given websocket Piesocket echo server
    const socket = new W3CWebSocket(
      "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
    );

     // Event handler for when the WebSocket connection is opened
    socket.onopen = () => {
      console.log("WebSocket connected");
      setIsWebSocketConnected(true);
    };

    // Event handler for when the WebSocket connection is closed
    socket.onclose = () => {
      console.log("WebSocket disconnected");
      setIsWebSocketConnected(false);
    };

     // Cleanup function to close the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []); 

  return (
    <header
      style={{
        height: "32px",
        width: "100%",
        color: "#fff",
        padding: "8px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom:'2px solid grey',
        

      }}
    >
      <text style={{color: '#808080',fontSize:'24px',fontWeight:'500',marginLeft:'30px'}}>Dashboard</text>
      <div
        style={{
          color: isWebSocketConnected ? 'green' : 'red',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid gray',
          marginRight: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '500',
        }}
      >
         {isWebSocketConnected ? "Connected" : "Disconnected"}
      </div>
    </header>
  );
};

export default Navbar;

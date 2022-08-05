import './App.css';
import Header from './components/Header/Header';
import Register from './components/main/register/Register';
import ChatRoom from './components/main/chat-room/ChatRoom';
import React, { Component , useState } from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

function App() {
  const [sender,setSender] = useState(null);
  // todo add roting / , /chat/:senderId & /*
  //todo pass setSender as props
  return (
    <div style={{fontSize: "1rem", height: "500px"}}>
     <Header/>
     {/* <Register/> */}
     <ChatRoom/>
    </div>
  );
}

export default App;

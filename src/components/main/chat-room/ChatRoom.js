import "./ChatRoom.css"
import MessageBox from "./MessageBox/MessageBox"
import MessageTextBox from "./MessageTextBox/MessageTextBox"
import LoadAndSearch from "./search/LoadAndSearch"
import React, { useState } from 'react';


export default function ChatRoom(props)
{
    const [reciever, setReciever] = useState(null);
    const [messages, setMessages] = useState([]);

    // todo poll messages + decide the diff and update messages
    // todo get messages on change of reciever
    // todo sendMessage and update messages
    
    return (<div style={{height:"100%"}}>
        <div className="Search">
        <LoadAndSearch/>
        </div>
        <div className="ChatRoomMessageBox">
        <MessageBox />
        <MessageTextBox/>
        </div>
    </div>)
}
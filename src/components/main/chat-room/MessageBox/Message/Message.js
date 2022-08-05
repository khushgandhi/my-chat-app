import "./Message.css";
import React from 'react';
export function Message(props){

    return (
        <div className="MessageContainer">
            <div
            className = {props.messageType === "SENT" ? "sentMessage" : "recievedMessage"}
            >
                <span>{props.messageText}</span>
            </div>
            <br/>
            <br/>
        </div>
    )
}
import { Message } from "./Message/Message";
import "./MessageBox.css";
import React from "react";

export default function MessageBox(props) {
  //todo -: get messages from props and render on the view accordingly
  //todo -: scroll down to last message on change of messages
  function getMessages() {
    let messages = [
      { sentByYou: true, message: "Hii" },
      { sentByYou: false, message: "Hello" },
    ];
    return messages.map((message) => (
      <Message
        messageText={message.message}
        messageType={message.sentByYou ? "SENT" : "RECIEVED"}
      />
    ));
  }
  let noParticipantSelected = () => {
    return (
      <div className="NoParticipantSelected">
        Please select participant to chat
      </div>
    );
  };
  //
  let getMessagecontent = () => {
    let messageTexts = getMessages();
    return messageTexts;
  };
  return (
    <div class="MessageBox">
      <div className="RecipientName">
        <span>Divya</span>
      </div>
      {getMessagecontent()}
    </div>
  );
}

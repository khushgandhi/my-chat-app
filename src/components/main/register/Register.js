import { useState } from "react";
import "./Register.css";
import React from 'react';


export default function Register(props){

    let [text,updateText] = useState('');
    return (<div className="register-box">
        <div className="register-content">Register Here</div>
        <input className="register-input" type="text" value={text} onChange={(event)=>{
            updateText(event.target.value);
        }}></input>
        <button className="register-button"
        onClick={()=>{
            alert("Start chatting clicked for "+text);// to be replaced by register api + navigate to chatroom
        }}>
            Start Chatting
        </button>
    </div>);
}
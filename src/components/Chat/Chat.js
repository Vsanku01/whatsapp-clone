import { Avatar, IconButton } from '@material-ui/core';
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react';
import axios from '../../axios';
import './Chat.css';

const Chat = ({ messages }) => {
  const [input, setInput] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: 'Vishnu',
      timestamp: 'Just now!!',
      received: false,
    });

    setInput('');
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />

        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        {messages.map((message, index) => (
          <p
            className={`chat__message ${message.received && 'chat__receiver'}`}
            key={index}
          >
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}

        {/* <p className='chat__message chat__receiver'>
          <span className='chat__name'>Vishnu</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p> */}
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            type='text'
            placeholder='Type a message'
            val={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type='submit' onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;

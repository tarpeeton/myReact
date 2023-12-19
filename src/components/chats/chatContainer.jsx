import React from "react";

import {newMessageBody , changeMessage} from "../../datas/chat-reduser";
import Chats from '../chats/chats'






const ChatContainer = (props) => {
    const state = props.state.ChatPage;

   const  sendMessage = () => {
    props.dispatch(newMessageBody());
   }

   const Change_message = (message) => {
    props.dispatch(changeMessage(message));
   }
  return (

    <Chats state = {state} sendMessage={sendMessage} Change_message= {Change_message} />

  );
};



export default ChatContainer;

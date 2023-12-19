import React from "react";
import {
 Link,
 } from "react-router-dom";
import '../../css/chat.css'




const USER = (props) => {
    const path = "/chats/" + props.id;
    return (
        <ul className="list-unstyled chat-list">
            <Link to={path}  className="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                <div className="about">
                    <div className="name">{props.email}</div>
                    <div className="status">
                        <i className="fa fa-circle offline"></i> {props.status}
                    </div>
                </div>
            </Link>
        </ul>

      
 

       
    )
}

const MessageItem = (props) => {
    return <div className="message my-message">
    {props.message}
</div> 
}

const Chats = (props) => {
    const message = React.createRef();

    let MessageElements = props.state.messages.map((m, index) => (
        <MessageItem message={m.message} key={index} />
    ));
    
    
    
   const  sendMessage = () => {
    props.sendMessage()
   }
   const Change_message = () => {
    const messages = message.current.value;
    props.Change_message(messages);
   }
  return (
	<div className="col-lg-12 container ">
        <div className="row clearfix">
            <div className="webSoc">
                <div className="card chat-app">
                    <div id="plist" className="people-list">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <input type="text"  className="SeachIn"/>
                            </div>
                        </div>
                        {props.state.users.map((u) => (
                                        <USER
                                            key={u.id}
                                            id={u.id}
                                            email={u.email}
                                            status={u.status}
                                        />
                                    
                                    ))}
                    </div>
                    <div className="chat">
                        <div className="chat-header clearfix">
                            <div className="Dialogs">
                                <div className="col-lg-6">
                                    <Link href="#">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                                    </Link>
                                  
                                </div>
                            </div>
                        </div>
                        {/* Text users */}
                        <div className="chat-history">
                            <ul className="m-b-0">
                                <li className="clearfix">
                                    <div className="message-data text-right">
                                        <span className="message-data-time">10:10 AM, Today</span>
                                    </div>
                                    <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                </li>
                                <li className="clearfix messageII">
                                    <div className="message-data">
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                
                                {MessageElements}
                                    
                                </li>                               
                                                        
                            
                            </ul>
                        </div>
                        {/* send Message */}
                        <div className="chatMessage ">
                            <div className="Xuynacha ">
                                <textarea type="text" ref={message} value={props.change_message}  onChange={Change_message}  name="MessageSend" id="Messagesend"  className="MessageSend" placeholder="Enter text here..."/>        
                                <button type="button" onClick={sendMessage} className="SendButton">send</button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



  );
};



export default Chats;

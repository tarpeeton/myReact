import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NAVBAR from './components/navbar/navbar';
import CONTAINER  from './components/contents/content';
import ChatContainer from './components/chats/chatContainer';
import FooterContainer from './components/footer/footerContainer';


// Components



const App = (props) => {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <NAVBAR />
              < CONTAINER
               state={props.state.footerPage} 
              />

             <FooterContainer  state={props.state}  dispatch={props.dispatch}/>
            </>
          }
        />
        <Route path="/chats" element={<ChatContainer state={props.state} dispatch={props.dispatch}   />}
         />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

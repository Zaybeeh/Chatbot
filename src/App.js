import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import { ConditionallyRender } from "react-util-kit";

import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Logo from "../src/Imgs/favicon.png";

import "./App.css";

function App() {
  const [showChatbot, toggleChatbot] = useState(false);
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <ConditionallyRender
        ifTrue={showChatbot}
        show={
          <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        }>
        </ConditionallyRender>
        
        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <img className="chatbot-button-img" src={Logo}></img>
        </button>
      </div>
    </div>
  );
}

export default App;
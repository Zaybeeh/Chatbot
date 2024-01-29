import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar/BotAvatar";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";


const config = {
  botName: "Growing Globe Immigration",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
  },
  initialMessages: [
    createChatBotMessage(`Hello! How may we be of assistance?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Appointment",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        response: [
          {
            response: <a href="https://calendly.com/growingglobeimmigration">Click Here to Book an Appointment</a>,
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "FAQ",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        response: [
          {
            response: "Immigration to Canada WOOO",
            id: 2,
          },
        ],
      },
    },
  ],
  
};

export default config;
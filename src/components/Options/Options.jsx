import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Book an Appointment",
      handler: props.actionProvider.handleBookAnAppointment,
      id: 1,
    },
    { text: "FAQ", handler: props.actionProvider.handleFAQ, id: 2 },
    { text: "Call", handler: () => {}, id: 3 },
    { text: "Immigration Law", handler: () => {}, id: 3 },
  ];


  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
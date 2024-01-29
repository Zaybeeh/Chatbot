import React from "react";

import "./Quiz.css";

const FlashCard = ({response}) => {
  return (
    <>
      <div
        className= "flashcard-container"
      >
        {response}
      </div>
    </>
  );

  
};

export default FlashCard;
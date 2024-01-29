import React, { useState } from "react";

import FlashCard from "./FlashCard";

const Quiz = (props) => {
  console.log(props);
  let [responseIndex] = useState(0);
  
  const currentResponse = props.response[responseIndex];

  return (
    <FlashCard
      response={currentResponse.response}
    />
  );
};

export default Quiz;
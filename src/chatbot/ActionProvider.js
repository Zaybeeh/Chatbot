class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello! How may we help you?");
    this.addMessageToState(message);
  };

  handleBookAnAppointment = () => {
    const message = this.createChatBotMessage(
      "Great!",
      {
        widget: "Appointment",
      }
    );
    this.addMessageToState(message);
  };

    handleFAQ = () => {
      const message = this.createChatBotMessage(
        "FAQ's for Immgiration to Canada",
        {
          widget: "FAQ"
        }
      );
      this.addMessageToState(message);
    };
  

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
};

export default ActionProvider;
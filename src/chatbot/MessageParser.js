class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("book an Appointment") || lowercase.includes("appointment") || lowercase.includes("book")) {
      this.actionProvider.handleBookAnAppointment();
    }

    if (lowercase.includes("facts") || lowercase.includes("faq") || lowercase.includes("information") || lowercase.includes("how to") || lowercase.includes("question")) {
      this.actionProvider.handleFAQ();
    }
  }
}

export default MessageParser;
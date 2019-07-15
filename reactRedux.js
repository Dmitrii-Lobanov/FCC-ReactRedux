class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }

  submitMessage(){
    let currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} /><br />
        <button type="button" onClick={this.submitMessage}>Add a message</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })}
        </ul>
      </div>
    );
  }
};

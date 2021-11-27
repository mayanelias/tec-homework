import React from "react";
class Input extends React.Component {
  state = { name: "" };
  onChangeHandlerName = (evt) => {
    this.setState({ name: evt.target.value });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.onChangeHandlerName}
          type="text"
          placeholder="EnterName"
        />
        <p>My Name is: {this.state.name}</p>
      </div>
    );
  }
}
export default Input;

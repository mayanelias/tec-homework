import React from "react";
class GetTodosList extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.todos.title}</h1>
        <h1>{this.props.todos.status}</h1>
      </div>
    );
  }
}
export default GetTodosList;
import React from "react";
import GetTodosList from "./GetTodosList";
class TodosList extends React.Component {
  state = {
    todos: [
      {
        title: "do homework",
        status:"complited",
      },
      {
        title: "clean the house",
        status: "not complited",
      },
    ],
  };
// AddTodoList = (evt) => this.setState ({input:evt.target.value});
  // AddTodo=()=>{
  //   this.setState({
  //     button: this.state.todos.push({
  //     title:"ghfghghfgh",
  //     status:false
  //     }),
  //   }); 
  // }
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };
  addNewTodo = () => {
    let { todos, input } = this.state;
    todos.push(input);
    this.setState({todos: todos});
  };
  removeTodo = (index) => {
    const deleteTodo = [...this.state.todos];
    deleteTodo.splice(index, 1);

    this.setState(state => ({
        todos: deleteTodo
    }));
}
  render() {
    return (
      <div>
<div>
{this.state.todos.map((todo, i) => (
<GetTodosList todos={todo} />
))}
<input
type="text"
placeholder="EnterTodo"
onChange={this.saveInput}
/>
<button onClick={this.addNewTodo}>Add Todo</button>
<button onClick={this.removeTodo}>Remove Todo</button>
</div>
</div>
    );
  }
}
export default TodosList;

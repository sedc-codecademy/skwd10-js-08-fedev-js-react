import React from "react";

class TodoClassPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoInputValue: "",
    };
  }

  addTodo() {
    console.log(this);

    this.setState(prevState => {
      if (this.state.todoInputValue.length < 1) {
        return prevState;
      }
      return {
        todos: [...prevState.todos, this.state.todoInputValue],
        todoInputValue: "",
      };
    });
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  render() {
    console.log("Component Rerendered");
    return (
      <section className="page">
        <div className="page__heading">
          <h2>TODOS</h2>
        </div>
        <div>
          <form>
            <label htmlFor="todo_input">Add a Todo</label>
            <input
              value={this.state.todoInputValue}
              type="text"
              id="todo_input"
              onChange={e =>
                this.setState(
                  prevState => (prevState.todoInputValue = e.target.value)
                )
              }
            />
            <button type="button" onClick={() => this.addTodo()}>
              Add Todo
            </button>
          </form>
        </div>
        <ol>
          {this.state.todos.map((todo, i) => (
            <li key={todo + i}>{todo}</li>
          ))}
        </ol>
      </section>
    );
  }
}

export default TodoClassPage;

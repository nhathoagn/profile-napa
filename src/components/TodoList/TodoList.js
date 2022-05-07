import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

//khai báo thư viện axios
import axios from "axios";
import TodoHeader from "./TodoHeader/TodoHeader";

function TodoList() {
  const id_user = JSON.parse(localStorage.getItem("id"));
  const [state, setState] = useState({
    todos: [],
  });
  let data = [];
  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  const addTodo = (title) => {
    const todoData = {
      user: id_user,
      title: title,
      completed: false,
    };
    axios
        .post("https://profile-json-server.herokuapp.com/todos", todoData)
        .then((response) => {
          setState({
            todos: [...state.todos, response.data],
          });
        });
  };
  const deleteTodo = (id) => {
    let new_data = [];
    axios.delete(`https://profile-json-server.herokuapp.com/todos/${id}`);
    state.todos.map((data) => {
      if (data.id !== id) {
        new_data.push(data);
      }
    });
    setState({ todos: new_data });
  };
  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    // tạo GET request để lấy danh sách todos
    axios
        .get(`https://profile-json-server.herokuapp.com/todos`)
        .then((response) => {
          response.data.map((current_user) => {
            if (current_user.user === 2) {
              data.push(current_user);
            }
          });
          setState({ todos: data });
        });
  }, []);

  return (
      <div className="todo-container">
        <TodoHeader />
        <AddTodo addTodo={addTodo} />
        <Todos
            todos={state.todos}
            handleChange={handleCheckboxChange}
            deleteTodo={deleteTodo}
        />
      </div>
  );
}
export default TodoList;
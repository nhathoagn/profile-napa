import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTodo, getTodoById, getTodoByIdUser, postTodo, updateTodo } from "../../api/api";
import AddTodo from "../TodoList/AddTodo";
import TodoHeader from "../TodoList/TodoHeader/TodoHeader";
import TodoItem from "../TodoList/TodoItem";

const UserTodo = (props) => {
  const { id } = useParams();

  const [todos, setTodos] = useState();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await getTodoByIdUser(id);
    setTodos(data);
  };
  const handleCheckboxChange = async (id) => {
    const todo = await getTodoById(id);
    const completed = todo.completed;
    const user = todo.user;
    const title = todo.title;
    const data = {
      user: user,
      title: title,
      completed: !completed,
    };
    await updateTodo(id, data);
    getTodos();
  };

  const deleteTodos = async (id) => {
    await deleteTodo(id);
    getTodos();
  };
  const addTodo = async (title) => {
    const todoData = {
      user: id,
      title: title,
      completed: false,
    };
    await postTodo(todoData);
    getTodos();
  };
  return (
    <div className="todo-container">
      <TodoHeader />
      <AddTodo addTodo={addTodo} />
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleCheckboxChange}
            deleteTodo={deleteTodos}
          />
        ))}
    </div>
  );
};

export default UserTodo;

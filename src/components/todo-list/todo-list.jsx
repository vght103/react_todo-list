import React from "react";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

const TodoList = ({ todos, onDelete, onCompleted }) => {
  const handleDelete = (todo) => {
    onDelete(todo);
  };

  const handleCompleted = (todo) => {
    onCompleted(todo);
  };

  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onCompleted={handleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;

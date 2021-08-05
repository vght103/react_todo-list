import React from "react";
import styles from "./todo-item.module.css";

const TodoItem = ({ todo, onDelete, onCompleted }) => {
  const handleDelete = () => {
    onDelete(todo);
  };

  const handleCompleted = () => {
    onCompleted(todo);
  };

  return (
    <li
      className={`${styles.todo_item} ${handleCompleted ? "completed" : " "}`}
    >
      <input
        type="checkbox"
        className={styles.toggle}
        onChange={handleCompleted}
      />
      <label className={styles.label}>{todo.text}</label>
      <button className={styles.delete} onClick={handleDelete}>
        ❌
      </button>
    </li>
  );
};
export default TodoItem;

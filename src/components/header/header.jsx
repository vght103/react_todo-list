import React, { useRef } from "react";
import styles from "./header.module.css";

const Header = ({ onAdd }) => {
  // 어떻게 해야하지???
  // props 로 전달 받아?? 뭘??

  const inputRef = useRef();

  const todoAdd = (event) => {
    const todoText = inputRef.current.value;
    if (event.key === "Enter") {
      onAdd(todoText);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.new_todo}>
        <input
          ref={inputRef}
          type="text"
          className={styles.todo_input}
          placeholder="Write on your todo.."
          onKeyPress={todoAdd}
        />
        {/* <button className={styles.add_btn} onClick={todoAdd}>
          Add
        </button> */}
      </div>
    </>
  );
};

export default Header;

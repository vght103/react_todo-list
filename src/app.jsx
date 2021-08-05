import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";

function App() {
  // 데이터를 받아야되. 뭘? -> todolist
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoList = [
      { id: 1, text: "밥먹기", completed: false },
      { id: 2, text: "리액트공부", completed: false },
    ];

    setTodos(todoList);
  }, []);

  const handleAdd = (todoText) => {
    const addTodo = [
      ...todos,
      { id: Date.now(), text: todoText, completed: false },
    ];
    setTodos(addTodo);
  };

  const handleDelete = (todoItem) => {
    // 투두 리스트들을 받아와야 하는데..
    const deleteTodo = todos.filter((todo) => todo.id !== todoItem.id);
    setTodos(deleteTodo);
  };

  const handleCompleted = (todo) => {
    // todo.change가 되면, todo.completed = true
  };

  return (
    <div className={styles.app}>
      <section className={styles.todo_wrap}>
        <div className={styles.todo_container}>
          <Header onAdd={handleAdd} />
          <TodoList
            todos={todos}
            onDelete={handleDelete}
            onCompleted={handleCompleted}
          />
          <Footer todos={todos} />
        </div>
      </section>
    </div>
  );
}

export default App;

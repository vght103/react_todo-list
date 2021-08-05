import React from "react";
import styles from "./footer.module.css";

const Footer = ({ todos }) => {
  const activeTodos = todos.length;

  return (
    <section className={styles.footer}>
      <div className={styles.todo_count}>
        <span>{activeTodos} left items</span>
      </div>
      <ul className={styles.status}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </section>
  );
};

export default Footer;

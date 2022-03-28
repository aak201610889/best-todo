import React from 'react'
import './done__todo.css'
function DoneTodoCart({ title, doneTime, setdoneTime, dark }) {
  if (title === "") {
    return null;
  }
  return (
    <div className={dark ? "dark__todo_done" : "todo_done"}>
      <div>
        <s>{title}</s>
      </div>
    </div>
  );
}

export default DoneTodoCart
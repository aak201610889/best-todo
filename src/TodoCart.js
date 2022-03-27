import React, { useState } from 'react'
import './todocart.css'
function TodoCart({
  title,
  desc,
  todo,
  settodo,
  done,
  setdone,
  doneTime,
  setdoneTime,
}) {
  const HandleDelete = (title) => {
    if (todo.length === 1) {
      settodo([]);
    } else {
      settodo(todo.filter((item) => item.title !== title));
    }
  };
  const HandleDone = (title) => {
    let aak = [];
    aak = todo.filter((item) => item.title == title);
    settodo(todo.filter((item) => item.title !== title));
    setdone(done.concat(aak));
    setdoneTime(new Date());
  };

  return (
    <div className="todocart">
      <div className="main">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="desc">{desc}</div>
      </div>

      {/* we will take time */}
      <button
        className="done"
        onClick={() => {
          HandleDone(title);
        }}
      >
        done
      </button>
      <button className="edit" onClick={() => {}}>
        edit
      </button>
      <button className="delete" onClick={() => HandleDelete(title)}>
        delete
      </button>
    </div>
  );
}

export default TodoCart
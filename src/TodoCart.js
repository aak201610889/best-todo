import React, { useState } from 'react'
import './todocart.css'
function TodoCart({ title, desc, todo, settodo, done, setdone }) {
  const [doneTime, setdoneTime] = useState(new Date());

  const HandleDelete = (title) => {
    if (todo.length === 1) {
      settodo([]);
    } else {
      settodo(todo.filter((item) => item.title !== title));
    }
  };
  const HandleDone = (title) => {

    if (todo.length === 1) {
    
      settodo([]);
    } else {
      setdone(todo.filter((item) => item.title === title));
      console.log('2222222222222222222222222');
      console.log(done);
            console.log("2222222222222222222222222");
      settodo(todo.filter((item) => item.title !== title));
    }
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
      <button className="done" onClick={() => {HandleDone(title)}}>
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
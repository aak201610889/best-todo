import React, { useState } from 'react'
import './todocreator.css'
function TodoCreator({ todo, settodo }) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const AddingTodo = () => {
    settodo([...todo, { title, desc }]);

  }
  return (
    <div className="todoCreator">
      <div className="main_inputcreator">
        <input
          type="text"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
      </div>
      <div className="group_btn_c">
        <button className="done" onClick={AddingTodo} >
          create
        </button>
      
       
      </div>
    </div>
  );
}

export default TodoCreator
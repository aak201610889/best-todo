import React, { useState } from 'react'
import './todocreator.css'
function TodoCreator({ todo, settodo, dark }) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const AddingTodo = () => {
    if (title === "" || desc === "") {
      return null;
    }
    
    //to prevent adding same todo
    if (todo.find(todo => todo.title === title || todo.desc === desc)) {
      console.log("Todo already exists");
      return null;
    }

    settodo([...todo, { title, desc }]);
    settitle("");
    setdesc("");

    

  }

  return (
    <div className={dark ? "todoCreator__dark" : "todoCreator"}>
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
        <button className="done" onClick={AddingTodo}>
          create
        </button>
      </div>
    </div>
  );
}

export default TodoCreator
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
  Edit,
  setEdit,
  color,
  setcolor,
  showEdit,
  setshowEdit,
}) {
  const HandleDelete = (title) => {
    if (todo.length === 1) {
      settodo([]);
    } else {
      settodo(todo.filter((item) => item.title !== title));
    }
  };
  const colorHandler = (e) => {
    setcolor(e.target.value);

  };

  const HandleDone = (title) => {
    let aak = [];
    aak = todo.filter((item) => item.title == title);
    settodo(todo.filter((item) => item.title !== title));
    setdone(done.concat(aak));
    setdoneTime(new Date());
  };
  const HandleEdit = (title) => {
    let aak = [];
    aak = todo.filter((item) => item.title == title);
    setshowEdit(true)
    setEdit(aak);
    console.log("====================================");
  };
  if (title === "" || desc === "") {
    return null;
  }
  return (
    <div
      className={`todocart ${
        color === "red"
          ? "red"
          : color === "blue"
          ? "blue"
          : color === "green"
          ? "green"
                : color === "white"
              ? "white" 
                : color === "brown"
              ? "brown" :'dark'
              
      }`}
    >
      <div className="main">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="desc">
          <p> {desc}</p>
        </div>
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
      <button
        className="edit"
        onClick={() => {
          HandleEdit(title);
        }}
      >
        edit
      </button>
      <select
        name=""
        id=""
        onChange={colorHandler}
        className={` ${
          color === "red"
            ? "red"
            : color === "blue"
            ? "blue"
            : color === "green"
            ? "green"
              : color === "white"
                ? "white"
                : color === "brown"
                ? "brown" :'dark'
        }`}
      >
        <option value="brown">brown</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="white">white</option>
        <option value="dark">dark</option>
      </select>
      <button className="delete" onClick={HandleDelete}>
        x
      </button>
    </div>
  );
}

export default TodoCart
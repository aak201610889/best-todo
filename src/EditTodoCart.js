import React, { useState } from 'react'
import "./edittodocart.css";
function EditTodoCart({ Edit, setEdit, showEdit, setshowEdit,dark}) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const EditHandler = () => {
    setEdit({ title, desc });
    console.log("====================================");
    console.log(Edit);
    console.log("====================================");
    setshowEdit(false)
  };

  return (
    <div className={dark ? "edittodocart__dark " : "edittodocart "}>
      <div className="editcontent">
        <input
          type="text"
          placeholder={Edit.title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder={Edit.desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button onClick={EditHandler}>Edit</button>
      </div>
      <button
        className="closeModal"
        onClick={() => {
          setshowEdit(false);
        }}
      >
        x
      </button>
    </div>
  );
}

export default EditTodoCart
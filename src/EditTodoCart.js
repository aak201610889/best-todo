import React, { useState } from 'react'
import "./edittodocart.css";
function EditTodoCart({
  Edit,
  setEdit,
  showEdit,
  setshowEdit,
  todo,
  settodo,
  dark,
}) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const EditHandler = () => {
    if (title === "" || desc === "") {
      return null;
    }
    let aak = [];
    aak = todo.filter((item) => item.title == Edit[0].title);
    aak[0].title = title;
    aak[0].desc = desc;
    settodo(todo.filter((item) => item.title !== Edit[0].title));
    settodo(todo);
    setEdit([]);
    setshowEdit(false);

    console.log(todo);
  };

  return (
    <div className={dark ? "edittodocart__dark " : "edittodocart "}>
      <div className="editcontent">
        <input
          type="text"
          placeholder={Edit.title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          rows={4}
          type="text"
          placeholder={Edit.desc}
          onChange={(e) => setdesc(e.target.value)}
        ></textarea>

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
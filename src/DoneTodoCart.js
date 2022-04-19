import React, { useState } from 'react'
import './done__todo.css'
function DoneTodoCart({
  title,
  desc,
  // doneTime,
  // setdoneTime,
  dark,
  todo,
  settodo,
})
{
  const [data, setdata] = useState({title,desc})
  if (data.title === "") {
    return null;
  }
  const backHandler = () => {
    settodo([...todo, { title, desc }]);
  //delete from done
    setdata({title:'',desc:''})
    
 

  }
  return (
    <div
      className={dark ? "dark__todo_done" : "todo_done"}
      onClick={backHandler}
    >
      <div>
        <s>{data.title}</s>
      </div>
    </div>
  );
}

export default DoneTodoCart
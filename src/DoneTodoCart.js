import React from 'react'
import './done__todo.css'
function DoneTodoCart({ title, doneTime, setdoneTime }) {
  return (
    <div className='todo_done' >
      
      <div>
        <s>{title}</s>
     
      </div>
    </div>
  );
}

export default DoneTodoCart
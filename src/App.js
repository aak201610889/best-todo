import React, { useState } from 'react';
import './App.css';
import DoneTodoCart from './DoneTodoCart';
import Header from './Header';
import TodoCart from './TodoCart';
import TodoCreator from './TodoCreator';

function App() {
  const [dark, setdark] = useState(false)
  const [todo, settodo] = useState([])
  const [done, setdone] = useState([])
  const [doneTime, setdoneTime] = useState(new Date());
  console.log(done);
  return (
    <div className="App">
      <Header dark={dark} setdark={setdark} />
      <div className="main">
        <TodoCreator todo={todo} settodo={settodo} />
        {todo.map((item, index) => (
          <TodoCart
            title={item.title}
            key={index}
            desc={item.desc}
            todo={todo}
            settodo={settodo}
            done={done}
            setdone={setdone}
            doneTime={doneTime}
            setdoneTime={setdoneTime}
          />
        ))}
        <div className="left">
          <h1>Done</h1>
          {done.map((item, index) => (
            <DoneTodoCart title={item.title} key={index} doneTime={doneTime} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

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
  return (
    <div className="App">
      <Header dark={dark} setdark={setdark} />
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
        />
      ))}
      {done.map((item, index) => (
        <DoneTodoCart item={ item.title}/>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TodoCreator from './TodoCreator';

function App() {
  const [dark, setdark] = useState(false)
  const [todo, settodo] = useState([])
  return (
    <div className="App">
      <Header dark={dark}setdark={setdark} />
     
    </div>
  );
}

export default App;

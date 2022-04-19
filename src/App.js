import React, { useState } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import DoneTodoCart from './DoneTodoCart';
import Header from './Header';
import TodoCart from './TodoCart';
import TodoCreator from './TodoCreator';
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from 'react-beautiful-dnd'
import EditTodoCart from './EditTodoCart';

function App() {
  const [dark, setdark] = useState(false)
  const [todo, settodo] = useState([]);
  const [done, setdone] = useState([])
  const [Edit, setEdit] = useState([])
  const [showEdit, setshowEdit] = useState(false)
  const [doneTime, setdoneTime] = useState(new Date());
  const [color, setcolor] = useState([])
  const [ShowCreator, setShowCreator] = useState(false)
  const [ShowFinish, setShowFinish] = useState(false)
  console.log(done);

  return (
    <>
      <div className={dark ? "App__dark" : "App"}>
        <Header
          dark={dark}
          setdark={setdark}
          ShowCreator={ShowCreator}
          setShowCreator={setShowCreator}
          ShowFinish={ShowFinish}
          setShowFinish={setShowFinish}
        />
        <div className="main">
          <div>
            {ShowCreator && (
              <TodoCreator todo={todo} settodo={settodo} dark={dark} />
            )}
          </div>

          <div className="todo">
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
                Edit={Edit}
                setEdit={setEdit}
                color={color}
                setcolor={setcolor}
                showEdit={showEdit}
                setshowEdit={setshowEdit}
              />
            ))}
            {showEdit && (
              <EditTodoCart
                Edit={Edit}
                setEdit={setEdit}
                setshowEdit={setshowEdit}
                showEdit={showEdit}
                dark={dark}
                todo= {todo}
                settodo={settodo}
              />
            )}

            {ShowFinish && (
              <div className={dark ? "donecart__dark" : "donecart"}>
                <h1 className={dark ? "doneTitle__dark" : "doneTitle"}>Done</h1>
                {done.map((item, index) => (
                  <DoneTodoCart
                    title={item.title}
                    desc={item.desc}
                    key={index}
                    doneTime={doneTime}
                    dark={dark}
                    todo={todo} settodo= {settodo}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

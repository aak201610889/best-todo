import React from 'react'
import './header.css'
function Header({
  dark,
  setdark,
  ShowFinish,
  setShowFinish,
  ShowCreator,
  setShowCreator
}) {
  return (
    <div className={dark ? "header__dark" : "header"}>
      <div className={dark ? "logo__dark" : "logo"}>
        <h1>logo</h1>
        <button
          className={dark ? "btn__dark" : "btn"}
          onClick={() => {
            setShowCreator(!ShowCreator);
          }}
        >
          new todo+
        </button>
        <button
          className={dark ? "btn__dark" : "btn"}
          onClick={() => {
            setShowFinish(!ShowFinish);
          }}
        >
          done todos
        </button>
      </div>
      <div className="Other">
        <button
          className={dark ? "theming__dark" : "theming"}
          onClick={() => {
            setdark(!dark);
          }}
        ></button>
        <div className={dark ? "dark__links" : "links"}>
          <div>
            <h1>Todo</h1>
          </div>
          <div>
            <h1>Weather</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
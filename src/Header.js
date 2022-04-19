import React from 'react'
import './header.css'
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
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
        {dark ? (
          <Brightness5Icon
            className={dark ? "header__icon__dark" : "header__icon"}
            onClick={() => {
              setdark(false);
            }}
          />
        ) : (
          <Brightness4Icon
            className={dark ? "header__icon__dark" : "header__icon"}
            onClick={() => {
              setdark(true);
            }}
          />
        )}
        <div className={dark ? "dark__links" : "links"}>
          <div>
            <h1>Todo</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header
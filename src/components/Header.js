import React, { useState } from "react";
import TextInfo from "./TextInfo";
import AddCard from "./AddCard";

import "./css/Header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const addCardHandler = () => {
    setClicked(true);
    
  };

  return (
    <header className="header">
      <h1 className="title">Aesthetic Cards</h1>
      <ul className="header-list">
        <li>
          <div className="add-div">
            <button
              className="add-card material-symbols-outlined"
              onClick={() => addCardHandler()}
            >
              add
            </button>
            <TextInfo text="Add card" />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;

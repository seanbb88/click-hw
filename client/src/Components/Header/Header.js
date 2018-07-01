import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <div className="header">
      <h1>Click-It-Game</h1>
      <p>This is a game of memory..Click on a picture > The pics will shuffle and you will see your score go up... But if you repeat clicking on a picture you lose!</p>
      <ul className="score-list">
        <li>Score: {props.score} </li>
        <li>Top Score: {props.topScore} </li>
      </ul>
    </div>
  </div> 
);

export default Header;

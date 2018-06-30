import React from "react";

function Navbar(props) {
  return (
    <div >
      <nav>
        <div >
          <a
            
            
            
          >
            Home
          </a>
          <a href="/" >
            Remember It!
          </a>
          <ul >
            <li >Score: {props.score}</li>
            <li >Top Score: {props.topScore}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

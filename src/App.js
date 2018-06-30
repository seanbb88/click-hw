import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Pics from "./components/Pics/Pics.js";
import pictures from "./pictures.json";

import "./index.css";

class App extends Component {
  state = {
    pictures: pictures,
    score: 0,
    topScore: 0,
    picsClicked: [],
    footerText: ""
  };

  renderPictures = array => {
    return this.state.pictures.map(pic => (
      <section className="col s4 m3 l3" key={pic.id} id={pic.id}>
        <Pics
          name={pic.name}
          image={pic.image}

        />
      </section>
    ));
  };

  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        
        <br />
        <div className="container row cardWrapper">
          {this.renderPictures(this.state.pictures)}
        </div>
      </div>
    );
  }
}

export default App;

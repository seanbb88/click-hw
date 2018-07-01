import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Pictures from "./Components/Pictures/Pictures";
import pics from "./pictures.json";
import Footer from "./Components/Footer/Footer";
import "./index.css";

class App extends Component {
  state = {
    pics: pics,
    score: 0,
    topScore: 0,
    clickedPics: [],
    footerMessage: "Try and see if you can beat your high score!"
  };

  clickedPicture = (id) => {
    
    if (this.state.clickedPics.includes(id)) {
      this.setState({ score: 0, clickedCards: [] });
      this.setState({ footerMessage: "This card was already selected. . Try again!" });
      setTimeout(() => {
        this.setState({footerMessage: ""})
      }, 1500)
 
    } else {
      this.setState({ clickedPics: [...this.state.clickedPics, id] });
      this.setState({ score: this.state.score + 1 });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
        this.setState({ footerMessage: "" });
      }
      if (this.state.score === 11) {
        this.setState({ footerMessage: "Congrats. . You done did it!" });
        this.setState({ score: 0, clickedPics: [], pics: pics });

      }
    }
  };

  renderPics = () => {
    return this.state.pics.map(pic => (
      <div className="pics-display" key={pic.id} id={pic.id}>
        <Pictures
          name={pic.name}
          image={pic.image}
          sufflePictures={() => {
            this.sufflePictures(this.state.pics);
          }}
          clickedPicture={()=> {this.clickedPicture(pic.id)}}
        />
      </div>
    ));
  };

  sufflePictures = array => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ pics: pics });
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />

        <div className="pics-container">{this.renderPics(this.state.pics)}</div>
        <Footer footerMessage={this.state.footerMessage}/>
      </div>
    );
  }
}

export default App;

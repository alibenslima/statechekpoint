import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    count: 0,
    intervalId: 0,
    fullName: "Diego Maradona",
    bio: "Diego Armando Maradona, né le 30 octobre 1960 à Lanús , est un footballeur international argentin devenu entraîneur. Durant sa carrière de joueur, entre 1976 et 1997, il joue au poste de milieu offensif sous le maillot no 10.",
    imgSrc:
      "https://static1.purepeople.com/articles/9/41/36/69/@/5948282-diego-maradona-a-manchester-en-2006-624x600-3.jpg",
    profession: "footballeur_international",
    isVisible: true,
  };
  handleShow = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleShow}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>

        {this.state.isVisible && (
          <div>
            <h1> {this.state.fullName} </h1>
            <img src={this.state.imgSrc} alt="photoplayerfootball" />
            <h2>{this.state.profession}</h2>
            <h4>{this.state.bio}</h4>
            <h1>
              The component has been rendered for {this.state.count} seconds
            </h1>
          </div>
        )}
      </div>
    );
  }
}

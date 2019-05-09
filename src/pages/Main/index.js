import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className="App-header">
        <Link className="App-link" to="pessoas">
          Clique para começar
        </Link>
      </div>
    );
  }
}

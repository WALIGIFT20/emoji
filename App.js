import React, { Component } from "react";
import "./App.css";
import SearchInput from "./SearchInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchInput placeholder="Enter your favourite emoji" />
      </div>
    );
  }
}

export default App;

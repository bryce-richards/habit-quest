import React, { Component } from "react";
import "./App.css";
import UserDashboardView from "./container/UserDashboardView.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserDashboardView />
      </div>
    );
  }
}

export default App;

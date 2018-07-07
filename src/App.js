import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import routes from "./routes";



class App extends Component {
  componentDidMount() { }
  render() {
    return (
      <div className="App">
        <Header user={this.props.user} />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;

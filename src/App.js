import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar } from "./components/misc";
import Routes from "./Routes";
import "./App.css";

class App extends React.Component {
  render() {
    return (

        <div className="App container">
          <Navbar
            brandName={this.props.brandName}
          />
          <Routes />
        </div>
      )
  }
}

export default withRouter(App);

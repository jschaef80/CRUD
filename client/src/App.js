import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./containers/Listofuserscontainer";
import SignUp from "./components/signUp";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <SignUp></SignUp>
        <ListOfUsers></ListOfUsers>
      </div>
    );
  }
}
export default (App);

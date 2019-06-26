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
        <ListOfUsers></ListOfUsers>
        <SignUp></SignUp>
      </div>
    );
  }
}
export default (App);

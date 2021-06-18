import axios from "axios";
import React, { Component } from "react";

export default class Dashboard extends Component {
  state = { quote: "" };
  getAffirmation = async () => {
    const response = await axios.get("https://www.affirmations.dev/");
    console.log(response);
  };

  componentDidMount() {
    this.getAffirmation();
  }

  render() {
    return <div></div>;
  }
}

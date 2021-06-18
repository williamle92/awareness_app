import React, { Component } from "react";
import TodoTracker from "../components/TodoTracker";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
import Calendar from "react-calendar";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      affirmation: "",
    };
  }

  componentDidMount() {
    fetch("https://www.affirmations.dev/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          affirmation: data.affirmation,
        });
      });
  }

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={5} alignItems="center" justify="center">
            <h1 className="affirm">{this.state.affirmation}</h1>
          </Grid>
          <Grid item xs={5}>
            <div className="calendar">
              <Calendar />
            </div>
          </Grid>
          <Grid item xs={10} spacing={9}>
            <div className="todo">
              <TodoTracker />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

import React, { Component } from "react";
import TodoTracker from "../components/TodoTracker";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../components/Sidebar";

import Calendar from "react-calendar";

export default class Dashboard extends Component {
  state = { affirmation : ''}

  componentDidMount(){
    fetch('https://www.affirmations.dev/')
    .then(res => res.json())
    .then(data => {
      console.log(data);
   
      
    })
  }



  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={5}>
            <Calendar />
          </Grid>
          <Grid item xs={10}>
          <TodoTracker />
          </Grid>

        </Grid>
      </div>
    );
  }
}

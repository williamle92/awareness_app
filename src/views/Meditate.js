import React from "react";
import SearchBar from "../components/SearchBar";
import youtube from "../api/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Sidebar from "../components/Sidebar";
import VideoComponents from "./VideoComponents";

class Meditate extends React.Component {
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <VideoComponents />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Meditate;

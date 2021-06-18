import { Divider, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./VideoComponents.css";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";
import youtube from "../api/youtube";
import SearchBar from "../components/SearchBar";

export default class VideoComponents extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("10 minute guided meditation");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="component">
        <Grid container>
          <SearchBar onTermSubmit={this.onTermSubmit}/>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item direction="column" xs={8} className="sidebarvideo">
            <VideoDetail video={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={4} alignItems="flex-start">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

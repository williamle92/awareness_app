import React from "react";
import SearchBar from "../components/SearchBar";
import youtube from "../api/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Sidebar from "../components/Sidebar";

class Meditate extends React.Component {
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
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchBar onTermSubmit={this.onTermSubmit} />
          </Grid>
          <Divider />
          <Grid container direction="column" xs={5} className="sidebarvideo">
              <Sidebar />
            <VideoDetail video={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={6}>
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

export default Meditate;

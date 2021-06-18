import React from "react";
import './VideoItem.css'
import Grid from "@material-ui/core/Grid";


const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <Grid container spacing={1} alignItems="flex-end" >
        <Grid item alignItems="center" justify="space-between" >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          <h3>{video.snippet.title}</h3>
        </div>
      </div>

        </Grid>

      </Grid>

    </div>
  );
};

export default VideoItem;

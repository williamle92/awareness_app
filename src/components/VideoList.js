import React from "react";
import VideoItem from "./VideoItem";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
// import { CallMissedSharp } from "@material-ui/icons";

const VideoList = ({ videos, onVideoSelect }) => {
  const RenderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div className="ui relaxed divided list">
      <List component="nav" className='list'>
        {RenderList}
      </List>
    </div>
  );
};

export default VideoList;

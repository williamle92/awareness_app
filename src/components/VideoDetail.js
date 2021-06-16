import React from "react";
import ReactPlayer from "react-player";
import Card from '@material-ui/core/Card';


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <ReactPlayer url={videoSrc} play />
        
      </div>
      <Card>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default VideoDetail;

import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="video"  autoPlay muted loop>
        <source src={"/assets/Video Casaqeela 2.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

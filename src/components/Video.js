import React from 'react';

const VideoComponent = () => {
  return (
    <div>
    
      <video width="600" controls>
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

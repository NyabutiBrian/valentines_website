import React from 'react';
import ReactPlayer from 'react-player';

function No() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ReactPlayer
        url="https://www.youtube.com/embed/WN63lQ-onn8"
        width="400px"
        height="300px"
        title="Valentine Is Coming Where’s Your Boyfriend? | Animation"
        controls
      />
    </div>
  );
}

export default No;
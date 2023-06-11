import React from 'react';
import ReactPlayer from 'react-player';

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
  };
};

type Props = {
  video: Video;
};

const Player: React.FC<Props> = ({ video }) => {
    if (!video) {
      return <div>No video selected</div>;
    }
  
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  
    return (
      <div>
        <ReactPlayer url={videoUrl} playing controls />
      </div>
    );
  };
  

export default Player;
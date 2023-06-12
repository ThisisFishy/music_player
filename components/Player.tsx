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
  onNext: () => void; // Add onNext prop for handling autoplay of next video
};

const Player: React.FC<Props> = ({ video, onNext }) => {
  if (!video) {
    return <div>No video selected</div>;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

  const handleEnded = () => {
    onNext(); // Call onNext function to autoplay the next video
  };

  return (
    <div>
      <ReactPlayer url={videoUrl} playing controls onEnded={handleEnded} />
    </div>
  );
};

export default Player;

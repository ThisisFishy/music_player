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
    onNext();
  };

  return (
    <div className='nowrap overflow-hidden'>
      <ReactPlayer url={videoUrl} playing controls onEnded={handleEnded} />
      <p className='w-96 text-2xl ml-2 mt-4 overflow-hidden'>{video.snippet.title}</p>
    </div>
  );
};

export default Player;

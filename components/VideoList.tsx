
import React from 'react';

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
  videos: Video[];
};

const VideoList: React.FC<Props> = ({ videos }) => {
  return (
    <div className="mt-10">
        <h2 className="text-2xl mb-3">Video Queue:</h2>
        {videos.map((video, index) => (
            <p key={index} className="mb-1">{video.snippet.title}</p>
        ))}
    </div>
  );
};

export default VideoList;
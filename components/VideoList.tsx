
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
  onMoveToTop: (index: number) => void;
};

const VideoList: React.FC<Props> = ({ videos, onMoveToTop }) => {
  return (
    <div className="mt-10">
        <h2 className="text-2xl mb-3">Video Queue:</h2>
        {videos.map((video, index) => (
          <div className="mb-1 flex ">
            <div key={index}>
                <p className='w-96 whitespace-nowrap overflow-hidden mr-2'>{video.snippet.title}</p>
            </div>
            <button onClick={() => onMoveToTop(index)} className="h-10 mx-2 py-2 px-4 bg-blue-500 text-sm text-white rounded hover:opacity-80">Move to top</button> {/* Add this line */}
          </div>
        ))}
    </div>
  );
};


export default VideoList;
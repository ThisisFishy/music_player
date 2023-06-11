import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Player from '../components/Player';
import VideoList from '../components/VideoList';
import axios from 'axios';

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
  };
};

const HomePage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = async (newVideos: Video[]) => {
    const videosWithDuration = await Promise.all(
      newVideos.map(async (video) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'contentDetails',
            id: video.id.videoId,
            key: 'AIzaSyAdjIQ2HYt5YOHxhtItyrrOG_-ZaVelO8g',
          },
        });
  
        const duration = response.data.items[0].contentDetails.duration;
  
        return {
          ...video,
          duration,
        };
      })
    );
  
    setVideos((prevVideos) => [...prevVideos, ...videosWithDuration]);
  };
  
  

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClear = () => {
    setVideos([]);
    setCurrentIndex(0);
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-5">Youtube Player</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-5 mb-5">
        <Player video={videos[currentIndex]}/>
      </div>
      <button className="mr-2 py-2 px-4 bg-blue-500 text-white rounded" onClick={handlePrev}>Prev</button>
      <button className="mr-2 py-2 px-4 bg-blue-500 text-white rounded" onClick={handleNext}>Next</button>
      <button className="ml-2 py-2 px-4 bg-red-500 text-white rounded" onClick={handleClear}>Clear</button>
      <VideoList videos={videos} />
    </div>
  );
};

export default HomePage;
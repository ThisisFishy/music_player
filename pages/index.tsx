import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Player from '../components/Player';
import VideoList from '../components/VideoList';
import axios from 'axios';
import playlists from '../components/playlist';

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
  };
  // duration: string;
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
    if (currentIndex >= videos.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
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

  const handleMoveToTop = (index: number) => {
    setVideos((prevVideos) => {
      const video = prevVideos[index];
      return [video, ...prevVideos.filter((_, i) => i !== index)];
    });
    
    // if moved video was before or is the current video
    if (index <= currentIndex) {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? 0 : prevIndex - 1);
    }
  };
  
  const loadPlaylist = (playlistName: string) => {
    if (playlistName in playlists) {
      const playlistVideos = playlists[playlistName];
      setVideos((prevVideos) => [...prevVideos, ...playlistVideos]);
    }
  };

  return (
    <div className='flex'>  
      <div className="p-10">
        <h1 className="text-4xl mb-5 w-96">Youtube Player</h1>
        <div className='flex w-max'>
          <SearchBar onSearch={handleSearch} />
          <button onClick={() => loadPlaylist('fish recommendation')} className='content-end h-10 mx-2 mt-5 py-2 px-4 bg-zinc-950 text-white rounded hover:opacity-80'>
             fishy's playlist
          </button>
        </div>
        <div className="w-auto my-5">
          <Player video={videos[currentIndex]} onNext={handleNext} />
        </div>
        <button className="mr-2 py-2 px-4 bg-blue-500 text-white rounded hover:opacity-80" onClick={handlePrev}>
          Prev
        </button>
        <button className="mr-2 py-2 px-4 bg-blue-500 text-white rounded hover:opacity-80" onClick={handleNext}>
          Next
        </button>
        <button className="ml-2 py-2 px-4 bg-red-500 text-white rounded hover:opacity-80" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="h-144 mt-44 ml-20 bg-zinc-950 opacity-95 px-5 rounded-md border-2 shadow-lg shadow-black border-slate-700 overflow-y-auto">
        <VideoList videos={videos} onMoveToTop={handleMoveToTop} />
      </div>
    </div>
  );
};

export default HomePage;

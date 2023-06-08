import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideosInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  } 
  useEffect(()=>{
    getVideosInfo();
  },[]);

  return (
    <div className='flex flex-wrap'>
      {
      videos.map((video)=>{return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}/></Link>}) 
      }
    </div>
  )
}

export default VideoContainer
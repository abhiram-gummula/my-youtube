import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const dispatch = useDispatch();
  useEffect(()=>{closeMenuHandler()},[])

  const closeMenuHandler = () =>{
    dispatch(closeMenu());
  }

  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
      <div className='px-5 '>
      <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${videoID}`} title="Yedurangula Vaana Full Video Song | 18 Pages Songs | Nikhil, Anupama | Sid Sriram | Gopi Sundar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='w-full'>
        <LiveChat />
      </div>
      </div>
      
    <div>
      <CommentsContainer />
    </div>
    </div>
    
  )
}

export default WatchPage
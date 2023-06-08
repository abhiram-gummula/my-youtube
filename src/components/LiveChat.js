import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from "../utils/chatSlice"
import { getRandomMessage, getRandomName } from '../utils/helper'


const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector(store=>store.chat.messages);
  useEffect(()=>{
    const i = setInterval(() => {
      //API Polling here
      dispatch(addMessage({
        name: getRandomName(),
        message: getRandomMessage(),
      }))
    }, 2000);
    return ()=>{clearInterval(i)}
  },[dispatch])
  return (
  <>    
    <div className='border border-black h-[600px] w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
      {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
      </div>
    </div>
    <form 
    className='w-full p-2 ml-2 border border-black'
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name: "Abhiram Gummula",
        message: liveMessage,
    }
    ));
    setLiveMessage("");
  }
  }
    >
      <input className='px-2 w-96' type='text' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} /><button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
  </>

  )
} 

export default LiveChat
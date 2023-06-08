import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_AUTO_SUGGESTIONS_API } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    const getSuggestions = async () => {
      const data = await fetch(YOUTUBE_AUTO_SUGGESTIONS_API+searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      )
    };

    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSuggestions();
      }
    },200);

    return () => {
      clearTimeout(timer);
    }

  },
  [searchQuery, dispatch, searchCache])

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
        onClick={()=>toggleMenuHandler()}
        className='h-8 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnQGMz8OvAXcA8O68KY26wdbnq0nk0rD4Aw&usqp=CAU" alt="menu" />
        <Link to="/">
          <img className='h-8 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="logo" />
        </Link>
      </div>
      <div>
      <div className='col-span-10 px-10'>
        <input 
        className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" 
        value={searchQuery}
        onChange={(e)=>{setSearchQuery(e.target.value)}}
        onFocus={()=>{setShowSuggestions(true)}}
        onBlur={()=>{setShowSuggestions(false)}}
        />
        <button className='border border-r-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100' onClick={() => {
          navigate(`/results?search_query=${searchQuery}`);
        }}>🔍</button>
      </div>
      {showSuggestions && <div className='shadow-lg ml-12 w-[280px] fixed bg-white rounded-lg border border-gray-400'>
        <ul>
          {suggestions.map((suggestion)=>   <li
    key={suggestion}
    className='px-5 py-2 hover:bg-gray-100 cursor-pointer'
    onMouseDown={()=>{navigate(`/results?search_query=${suggestion}`); setSearchQuery(suggestion);}}
  >
     🔍 {suggestion}
     
  </li>)}
        </ul>
      </div>}
      
      </div>
      
      <div className='col-span-1'>
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU" alt="user-icon" />
      </div>
      
    </div>
  )
}

export default Head
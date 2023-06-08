import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import ResultVideoCard from './ResultVideoCard';
import { Link, useSearchParams } from 'react-router-dom';

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");
  const [results, setResults] = useState([]);

  
  useEffect(()=>{
    const getResults = async () => {
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API+`&q=${search_query}`);
      const json = await data.json();
      setResults(json.items);
    }
    getResults();
  },[search_query])
  return (
    <div>
      {results.length>0 && 
      results.map((result,index)=><Link to={"/watch?v="+result?.id?.videoId} key={index}><ResultVideoCard info={result} /></Link>)}
    </div>
  )
}

export default ResultsPage
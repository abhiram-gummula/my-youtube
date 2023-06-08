import React from 'react'

const ResultVideoCard = ({info}) => {
  const {snippet} = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-max shadow-lg flex'>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul className='px-4'>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  )
}

export default ResultVideoCard
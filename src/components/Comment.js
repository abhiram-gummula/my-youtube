import React from 'react'

const Comment = ({data}) => {
  const {name, text, replies} = data;
  return (
    <div className='flex bg-gray-100 p-2 rounded-lg my-2'>
      <img className='w-12 h-12' alt="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU" />
      <div className='px-3'>
      <p className='font-bold'>{name}</p><p>{text}</p>
      </div>

    </div>
  )
}

export default Comment
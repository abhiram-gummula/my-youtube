import React from 'react'
import Button from './Button'

const list = ['All', 'Live', 'Gaming', 'Songs', 'Football', 'Cricket', 'Cooking', 'Art' ]

const ButtonsList = () => {
  return (
    <div className='flex'>
      {list.map((item,index)=> <Button key={index} name={item} />)}
    </div>
  )
}

export default ButtonsList
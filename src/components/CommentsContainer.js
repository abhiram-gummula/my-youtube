import React from 'react'
import Comment from './Comment'

const CommentsData = [
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [ {
      name: "Abhiram Gummula",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Abhiram Gummula",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [ {
        name: "Abhiram Gummula",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Abhiram Gummula",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Abhiram Gummula",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ {
          name: "Abhiram Gummula",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [ {
            name: "Abhiram Gummula",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },],
        },],
      },],
    },
    {
      name: "Abhiram Gummula",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [ {
        name: "Abhiram Gummula",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Abhiram Gummula",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Abhiram Gummula",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },],
    },
  ],
  },
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhiram Gummula",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsList = ({comments}) => {
  return comments.map((comment, index)=> (
  <div key={index}>
    <Comment data={comment} />
    <div className='pl-5 border border-l-black ml-5'>
      <CommentsList comments={comment.replies} />
    </div>
  </div>
  ))
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={CommentsData} />
    </div>
  )
}

export default CommentsContainer
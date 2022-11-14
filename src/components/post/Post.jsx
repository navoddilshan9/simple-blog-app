// import { Link } from 'react-router-dom'
import './post.css'

import React from 'react'
import { useNavigate } from 'react-router-dom'
const Post = ({ post }) => {
  const navigate = useNavigate()

  return (
    <div
      className='posts'
      onClick={() => {
        navigate(`/post/${post._id}`)
      }}
    >
      <article class='card'>
        <header class='card__thumb'>
          <a href='#'>
            <img src={post?.image} />
          </a>
        </header>
        <div class='card__date'>
          <span class='card__date__day'>23</span>
          <span class='card__date__month'>Mai</span>
        </div>
        <div class='card__body'>
          <div class='card__category'>
            <a href='#'>{post?.tags.replace(',', '/')}</a>
          </div>
          <div class='card__title'>
            <a href='#'>{post?.title}</a>
          </div>
          <div class='card__subtitle'>Donec posuere vulputate</div>
          <p class='card__description'>{post?.story.substring(0, 150)}</p>
        </div>
        <footer class='card__footer'>
          <span class='icon icon--time'>
            {(post?.story.length / 1000).toFixed(0)} min
          </span>
          <span class='icon icon--comment'>
            <a href='#'>2 claps</a>
          </span>
        </footer>
      </article>
    </div>
  )
}

export default Post

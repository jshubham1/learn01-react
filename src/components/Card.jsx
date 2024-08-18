import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src='https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg' alt='' width={300}
        style={{border: '2px solid black'}}
        ></img>
      <h1>
        {props.title}
      </h1>
      <p>
        {props.desc}
      </p>
    </div>
  )
}

export default Card
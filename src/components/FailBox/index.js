import React from 'react'
import './style.scss'

export default ({ failedLetters }) => (
  <div className= 'wrapper-failbox'>
    <div className= 'title'>You missed:</div>
    <div className= 'list'>
      {failedLetters.map(item => (
        <div className = 'listItem' key={item}>{item}</div>
      ))}
    </div>
  </div>
)



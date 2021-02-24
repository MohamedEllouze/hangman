import React from 'react'
import './style.scss'
export default ({ spaces, correctLetters, wordFromAPI }) => (
  <div className= 'wrapper-anserbox'>
    {spaces.map((item, index) => {
      return(
      <div className = {`item ${spaces?"disabled":""}`} key={index}/>
      )
    })}
    {wordFromAPI.map((letter, index) => {
      return (
        <div className =  "item"  key={index}>
          {correctLetters.find(x => x === letter) ? letter : ''}
        </div>
      )
    })}
  </div>
)

import React from 'react'
import './style-result.scss'
export default ({ buttonAction, disabled, title, buttonLabel }) => (
  <div className={`wrapper-result ${disabled?'disabled':''}` }>
    <div className= 'content'>
      <div className='title'> {title}</div>
      <button className='button' onClick={buttonAction}>{buttonLabel}</button>
    </div>
  </div>
)

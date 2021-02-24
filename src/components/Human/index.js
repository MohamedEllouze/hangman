import React from 'react'
import './style.scss'

const VisibilitySetter = ({ visible, classes, ...props }) =>
  visible ? <div className= {classes} {...props} /> : null

export default ({ failedLetterCount }) => (
  <div className ='man'>
    <VisibilitySetter visible={failedLetterCount >= 1} classes="head">
      <div className= 'hair' />
      <div className= 'hair right' />
      <div className= 'eye' />
      <div className= 'eye right' />
      <div className= 'ear' />
      <div className= 'ear right' />
      <div  className= 'nose' />
      <div className= 'mouth'  />
    </VisibilitySetter>
    <VisibilitySetter visible={failedLetterCount >= 2} classes="neck" />
    <VisibilitySetter visible={failedLetterCount >= 3} classes="corpus">
      <VisibilitySetter visible={failedLetterCount >= 3} classes="chest">
        <VisibilitySetter visible={failedLetterCount >= 4} classes="arm">
          <VisibilitySetter visible={failedLetterCount >= 6} classes="hand" />
        </VisibilitySetter>
        <VisibilitySetter visible={failedLetterCount >= 8} classes="leg">
          <VisibilitySetter
            visible={failedLetterCount >= 10}
            classes="foot"
          />
        </VisibilitySetter>
      </VisibilitySetter>
      <VisibilitySetter
        visible={failedLetterCount >= 3}
        classes="chest right"
      >
        <VisibilitySetter
          visible={failedLetterCount >= 5}
          classes="arm right"
        >
          <VisibilitySetter visible={failedLetterCount >= 7} classes="hand" />
        </VisibilitySetter>
        <VisibilitySetter
          visible={failedLetterCount >= 9}
          classes="leg right"
        >
          <VisibilitySetter
            visible={failedLetterCount >= 11}
            classes="foot right"
          />
        </VisibilitySetter>
      </VisibilitySetter>
    </VisibilitySetter>
  </div>
)

import React from 'react'

const Button = ({text,hover}) => {
  return (
    <div className={hover ? 'button-hover' : 'button'}>
        <p>{text}</p>
    </div>
  )
}

export default Button
import React from 'react'

function Button({title, link}) {
  return (
    <button className="btn" type="button">
      {title}
    </button>
  )
}

export default Button

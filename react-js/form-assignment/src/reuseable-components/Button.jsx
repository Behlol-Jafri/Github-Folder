import React from 'react'

const Button = ({name , style , handleClick}) => {
  return (
    <>
    <button className={`bg-blue-600 text-white py-2 px-3 w-full rounded-xl ${style}`} onClick={handleClick}>{name}</button>
    </>
  )
}

export default Button
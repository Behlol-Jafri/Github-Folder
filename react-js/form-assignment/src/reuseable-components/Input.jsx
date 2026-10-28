import React from 'react'

const Input = ({inputType , inputPlaceholder ,inputName , inputValue , handleChange}) => {
  return (
    <>
    <label className='px-2 font-bold'>Enter {inputPlaceholder}</label>
    <input type={`${inputType}`}  name={`${inputName}`} value={inputValue} onChange={handleChange} className='bg-gray-100 border-2 border-gray-400 my-2 rounded-xl p-2 w-full outline-none focus:border-blue-500' placeholder={`Enter ${inputPlaceholder}`}/>
    </>
  )
}

export default Input
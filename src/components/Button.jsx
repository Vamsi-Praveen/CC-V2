import React from 'react'

const Button = ({text,type}) => {
  return (
     <button type={type} className='w-[180px] h-[35px] md:w-[238px] md:h-[37px] rounded-[11px] bg-black text-white hover:scale-105 transition'>{text}</button> 
  )
}

export default Button

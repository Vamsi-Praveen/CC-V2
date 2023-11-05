import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text,action}) => {
  return (
    <Link to={`/${action}`}>
     <button className='w-[180px] h-[35px] md:w-[238px] md:h-[37px] rounded-[11px] bg-black text-white hover:scale-105 transition'>{text}</button> 
    </Link>
  )
}

export default Button

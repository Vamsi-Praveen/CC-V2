import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContext } from '../context/Context'
import { useButtonContext } from '../context/ButtonContext'

const Button = () => {
  const {text,type} = useButtonContext()
  return (
    <button type={type} className='w-[180px] h-[35px] md:w-[238px] md:h-[37px] rounded-[11px] bg-black text-white hover:scale-105 transition'>{text}</button>
  )
}

export default Button

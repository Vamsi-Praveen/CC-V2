import React from 'react'
import code from '../assets/code.png'

const Avatar = ({ type }) => {
  return (
    <div className='w-[250px] h-[300px] flex items-center justify-center flex-col'>
      <div className='rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-slate-900 outline outline-[0.5px] outline-black overflow-hidden'>
        <img src={code} className='w-full h-full object-cover object-center bg-white' />
      </div>
      <div className='flex flex-col items-center mt-[10px]'>
        {type ? <h1 className='font-Poppins text-[18px]'>{type}</h1> : ''}
        <h1 className='font-Poppins font-bold text-[24px]'>Vamsi</h1>
        <h1>Associate Proffesor CSE</h1>
      </div>
    </div>
  )
}

export default Avatar

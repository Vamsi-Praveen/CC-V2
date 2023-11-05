import React from 'react'

const SearchInput = ({type,placeholder}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className='h-[45px] px-[15px] py-[10px] w-[250px] md:w-[300px] rounded-[12px] bg-white outline-none border-[2px] border-solid border-[#000] placeholder:font-meidum'/>
    </div>
  )
}

export default SearchInput

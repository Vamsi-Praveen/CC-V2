import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx'
import banner from '../assets/banner1.jpg';
import calender from '../assets/calender.svg';
import location from '../assets/location.svg'
import Avatar from '../components/Avatar.jsx';
import line from '../assets/line.svg'
import Footer from '../components/Footer.jsx'
import SearchInput from '../components/SearchInput.jsx';
import Button from '../components/Button.jsx';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    rollno: '',
    branch: '',
    year: '',
    hackerrank: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <>
      <section className='pb-[30px]'>
        <Header />
        <div className='mt-[80px]'>
          <img src={banner} className='w-full h-full md:w-full md:h-[400px] md:object-cover' />
        </div>
        <div>
          <div className='px-[40px] py-[30px] md:px-[80px] md:py-[50px]'>
            <div>
              <h1 className='font-bold text-[28px] text-black'>Code Carnival</h1>
              <div className='mt-[10px] flex flex-col gap-[5px]'>
                <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center'>
                  <img src={calender} alt='Calender' />
                  04/11/2023
                </p>
                <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center mt-'>
                  <img src={location} alt='Location' className='w-[24px]' />
                  BGB 102,  AEC
                </p>
                <p className='text-[#B5ABAB]'>Total participants: 12312</p>
              </div>
            </div>
            <div className='mt-[20px]'>
              <h1 className='text-[24px] text-black font-bold'>About</h1>
              <p className='text-[16px] md:text-[18px] font-normal leading-[1.5rem] text-slate-800 mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis, fugit quod delectus totam soluta sapiente corporis cum a quisquam maxime autem tempore voluptatibus molestias perferendis fuga nulla distinctio expedita reiciendis ratione perspiciatis illo rem accusantium commodi. Provident, fugiat soluta. Distinctio vel optio architecto explicabo maiores soluta sit sed quas eius. Voluptatem nemo repellendus dolorum perspiciatis, vitae recusandae? Aspernatur, labore.
              </p>
            </div>
            <div>
              <div className='relative'>
                <h1 className='text-[28px] font-Poppins text-black font-bold mt-[25px] md:mb-[40px]'>Organisers</h1>
                <div className='absolute left-[5rem] bottom-[-30px] mb-[20px] '>
                  <img src={line} className='w-[100px] ' />
                </div>
              </div>
              <div className='flex mt-[10px] md:gap-[20px] md:items-center'>
                <Avatar />
              </div>
            </div>
            <div className='w-full h-[500px] p-[20px]'>
              <h1 className='text-xl md:text-4xl font-bold text-center text-black px-[20px]'>Register Now for the Event</h1>
              <form onSubmit={handleSubmit} className='mt-[40px] flex items-center justify-center w-full flex-col gap-[20px]'>
                <SearchInput type={"text"} placeholder={"Name"} value={data.name} onChange={handleChange} name={"name"} />
                <SearchInput type={"text"} placeholder={"Roll No."} value={data.rollno} onChange={handleChange} name={"rollno"} />
                <SearchInput type={"text"} placeholder={"Hackerank Profile Name"} value={data.hackerrank} onChange={handleChange} name={"hackerrank"} />
                <SearchInput type={"text"} placeholder={"Branch"} value={data.branch} onChange={handleChange} name={"branch"} />
                <SearchInput type={"text"} placeholder={"Year"} value={data.year} onChange={handleChange} name={"year"} />
                <Button text={"Register Now"} type={"submit"}/>
              </form>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  )
}

export default Register

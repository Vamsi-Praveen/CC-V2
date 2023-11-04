import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import error from '../assets/404.svg'

const ErrorPage = () => {
  return (
    <section>
      <Header/>
      <div className='flex items-center w-full h-[480px] justify-center pt-[10px] pb-[50px]'>
        <img src={error} alt='Error Page Not Found 404' className='h-[480px] pt-[40px]'/>
      </div>
      <Footer/>
    </section>
  )
}

export default ErrorPage

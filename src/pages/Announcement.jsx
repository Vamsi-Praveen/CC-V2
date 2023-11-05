import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'
import announcement from '../assets/announcements.jpg'

const Announcement = () => {
    return (
        <section className='mt-[80px]'>
            <Header />
            <div>
                <div>
                    <img src={announcement} className='md:h-[400px] object-cover w-full' />
                </div>
                <div className='md:px-[40px] py-[30px] px-[20px]'>
                    <h1 className='font-bold text-black md:text-4xl text-2xl text-center'>Recent Announcements</h1>
                    <div className='mt-[40px] flex justify-center'>
                        <ul className='flex flex-col gap-[20px] w-full px-[40px] py-[10px] stripped-li list-disc font-Poppins font-medium'>
                            <li>Code Solved</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque officiis facere sunt atque labore!</li>
                            <li>Code Solved</li>
                            <li>Code Solved</li>
                            <li>Code Solved</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Announcement

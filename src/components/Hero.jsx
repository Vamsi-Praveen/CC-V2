import React from 'react'
import { motion } from 'framer-motion'
import banner from '../assets/hero-banner.jpg'
import Card from './Card'
import Button from './Button'

const Hero = () => {
    return (
        <motion.section className='w-full bg-slate-50/10 flex items-center justify-center flex-col pb-[30px] mt-[80px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            <div className='relative w-full'>
                <img src={banner} alt="Code Carnival Banner" className='w-full shadow-sm md:h-[620px]' />
                <h1 className='text-center font-medium text-[30px] md:text-[60px] absolute top-[30px] left-[-25px] md:top-[60px] md:left-[20rem] -translate-x-[-50%] -translate-y-[-50%] text-white'>Welcome to <br></br> Code Carnival</h1>
            </div>
            <div className='md:h-[40px] h-[30px] md:w-[22px] w-[20px] rounded-[32px] border border-1 border-slate-500 flex justify-center md:pl-[1px] pl-[0px] absolute md:top-[92%] top-[45%]'>
                <div className='h-[10px] w-[10px] md:h-[13px] md:w-[13px] bg-slate-300 rounded-full my-[5px] md:animate-scroll animate-scrollSmall'></div>
            </div>
            <div className='mt-[20px] flex flex-col items-center gap-[40px] pt-[30px]'>
                <h1 className='text-2xl md:text-4xl font-bold text-black'>UpComing Contests</h1>
                <motion.div
                    initial={{ opacity: 0, y: -50}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={
                        {
                            delay: 0.2,
                            duration: 2,
                            type: "spring"
                        }
                    }
                >
                    <Card action="register"/>
                </motion.div>
                <h1 className='text-2xl md:text-4xl font-bold text-black pt-[20px]'>Past Contests</h1>
                <div className='flex gap-[20px] flex-col items-center'>
                    <div className='flex gap-[15px] md:gap-[60px] flex-col md:flex-row'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={
                                {
                                    delay: 0.4,
                                    duration: 0.5,
                                }
                            }
                        >
                            <Card />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={
                                {
                                    delay: 0.4,
                                    duration: 0.5,
                                }
                            }
                        >
                            <Card />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={
                                {
                                    delay: 0.4,
                                    duration: 0.5,
                                }
                            }
                        >
                            <Card />
                        </motion.div>


                    </div>
                    <Button text={"Load More"} />
                </div>

            </div>
        </motion.section>
    )
}


export default Hero

import React from 'react'
import coding from '../assets/code.png'
import Calender from '../assets/calender.svg'
import Button from './Button'

const Card = () => {
    return (
        <div className='w-[180px] h-[280px] md:w-[270px] md:h-[370px] flex flex-col gap-[15px] my-[10px]'>
            <div>
                <img src={coding} alt='Code' />
            </div>
            <div className='flex flex-col items-center md:gap-[15px] gap-[12px]'>
                <div>
                    <h1 className='text-[15px] md:text-[18px]'>Code Carnival - CSE</h1>
                    <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center'>
                        <img src={Calender} alt='Calender' />
                        04/11/2023
                    </p>
                </div>
                <Button text={"Register Now"}/>
            </div>
        </div>
    )
}

export default Card

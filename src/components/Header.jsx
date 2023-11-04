import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.header className='bg-white shadow-md flex h-[80px] items-center justify-between px-[30px] fixed top-0 left-0 z-10 w-full'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <Link to='/'>
                <motion.div
                    initial={{x:-50,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{type:'spring',delay:0.35}}
                >
                <img src={logo} alt='Code Carnival'/>
                </motion.div>
            </Link>
            <nav>
                <ul className='flex items-center justify-center gap-[20px]'>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to='/about'>
                            About
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                    >
                        <Link to='/contest'>
                            Contests
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}>
                        <Link to='/gallery'>
                            Gallery
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.55 }}
                    >
                        <Link to='/annonucements'>
                            Annonucements
                        </Link>
                    </motion.li>

                </ul>
            </nav>
        </motion.header>
    )
}

export default Header

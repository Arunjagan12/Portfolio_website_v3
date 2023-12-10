"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[10px] text-center mb-[15px]'
        >
            Skills
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='font-mono text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           Acquiring and honing skills is the key to unlocking new career pathways and professional advancement.
        </motion.div>
    </div>
  )
}

export default SkillText
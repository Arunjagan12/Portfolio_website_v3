"use client";
import React from "react";

import { motion } from "framer-motion";

import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
     

     <div className='w-full h-auto flex flex-col items-center justify-center'>

<motion.div
variants={slideInFromLeft(0.5)}
className='text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[10px] text-center mb-[15px]'
>
    About Me
</motion.div>
<motion.div
variants={slideInFromRight(0.5)}
className='font-mono text-[20px] text-gray-200 mb-10 mt-[10px] text-center p-4'
>
I&apos;m a pre-final year computer science and engineering undergrad, and I&apos;m all about that software development life. I love building online apps and taking on tough challenges, and I&apos;m pretty darn good at it too. Python, C++, and Java are my homies, but I also hang out with HTML, CSS, JavaScript, React, and React Native. I have completed a few internships which helped me test my skills.I am a fast learner and efficient worker, capable of developing effective, scalable, and user-friendly solutions to solve real-world problems. I have completed several coding projects, both individually and as a part of a team, and have experience in version control tools such as Git and GitHub. Additionally, I am constantly exploring new technologies and platforms to expand my skill set and stay up-to-date with the latest industry trends. But it&apos;s not all about coding. I&apos;ve got mad communication and people skills too. I work great with others, and I always bring the positive vibes. I have a passion for technology and a desire to make a positive impact in the world through the use of technology.
</motion.div>
</div>
     

    
    </div>
  );
};

export default Encryption;

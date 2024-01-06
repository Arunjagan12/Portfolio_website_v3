import React from "react";
import {
    
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";

import { SiLeetcode,SiGeeksforgeeks,SiCodechef } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50 ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Coding Profiles</div>
                    <a href="https://github.com/Arunjagan12" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                      <RxGithubLogo />  
                      <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a href="https://leetcode.com/Arun_172/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <SiLeetcode />
                        <span className="text-[15px] ml-[6px]">LeetCode</span>    
                    </a>
                    <a href="https://auth.geeksforgeeks.org/user/aj743qbpd" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <SiGeeksforgeeks />
                        <span className="text-[15px] ml-[6px]">GeeksForGeeks</span>    
                    </a>
                    <a href="https://www.codechef.com/users/arun_172" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <SiCodechef />
                        <span className="text-[15px] ml-[6px]">CodeChef</span>    
                    </a>
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/arun.jegan.12/" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/arun-softwaredeveloper/" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">+91-9080270736</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">aj2966541@gmail.com</span>    
                    </p>
                </div>
            </div>

          
        </div>
    </div>
  )
}

export default Footer
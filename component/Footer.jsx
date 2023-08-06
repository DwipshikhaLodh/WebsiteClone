import React from "react";
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
    return (
        <div className='bg-indigo-900 text-white w-full p-10 flex flex-col items-center justify-center'>
          <div className='flex flex-row justify-center items-start w-3/5 mb-10'>
            <h1 className='font-bold text-2xl w-80 mr-9'>The future of Legal AI</h1>
            <div>
              <p className='font-semibold w-2/3 text-xs'>
                Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
              </p>
              <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold mt-5'>Get Started</button>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-around items-center pb-5 w-full'>
            <img className='w-1/4 mt-10' src="" alt="logo"></img>
            <ul className='flex flex-row justify-evenly items-center lg:w-2/4 w-3/4 border-t-2 border-indigo-500 pt-10'>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <div className='lg:w-1/4 w-3/4 flex flex-row justify-center items-center pt-10 '>
              <div className='bg-white text-black p-2 border border-white rounded-full mr-4'>
                <FaFacebookF/>
              </div>
              <div className='bg-white text-black p-2 border border-white rounded-full mr-4'>
                <AiOutlineInstagram/>
              </div>
              <div className='bg-white text-black p-2 border border-white rounded-full'>
                <AiOutlineTwitter/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Footer;
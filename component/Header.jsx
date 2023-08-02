import React from "react";

function Header() {
    return (
    <div className='flex flex-col items-center bg-gradient-to-b from-indigo-900 to-violet-900 py-3 text-white'>
        <div className='flex flex-row justify-around items-center w-full mt-4 '>
          <ul className='flex flex-row justify-evenly items-center w-1/3 text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <img src="" alt='logo' className='-translate-x-24'></img>
          <div>
            <button className='border border-white rounded-2xl w-20 py-0.5 mr-1 '>Sign up</button>
            <button className='border-2 border-orange-500 rounded-2xl w-20 py-0.5 ml-1 bg-orange-500 text-white'>Log in</button>
          </div>
        </div>

        <div className='flex flex-row justify-between w-full items-center px-40 py-8 py-16'>
          <div className='flex flex-col justify-center items-start w-90 mr-20'>
            <h1 className='text-4xl font-bold'>
              Unlock the Magic of AI in Your Legal Writings
            </h1>
            <p className='text-xs w-4/5 mt-2.5 mb-2.5'> 
              A platform that always you to build and launch legal brief easily by chat without coding
            </p>
            <div>
              <input className='bg-gray-600 text-xs h-9 w-52 border-2 border-gray-600 rounded-full px-3 mr-2' type='text' placeholder='Enter your email'></input>
              <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-32 font-semibold'>Request a Demo</button>
            </div>
          </div>
          <div className='border-8 border-purple-800 rounded-full'>
            <img className=' border-8 overflow-hidden border-purple-800 rounded-full' src='/images/wizard.png' alt='photo'></img>
          </div>
        </div>
    </div>

    )
}

export default Header;
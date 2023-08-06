import React from "react";

function Header() {
    return (
      <>
    <div className='flex flex-col items-center bg-gradient-to-b from-indigo-900 to-violet-900 py-3 text-white z-10'>
        <div className='flex flex-row flex-wrap justify-around items-center w-full mt-4 '>
          <ul className='flex flex-row justify-evenly items-center lg:w-1/3 w-full mb-2 text-white pt-6'>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <img src="" alt='logo' className='-translate-x-24 ml-10 -translate-y-20 lg:-translate-y-0'></img>
          <div className="lg:w-1/5 w-1/12 ">
            <button className='border border-white rounded-2xl w-20 py-0.5 lg:mr-1 mb-2'>Sign up</button>
            <button className='border-2 border-orange-500 rounded-2xl w-20 py-0.5 lg:ml-1 bg-orange-500 text-white'>Log in</button>
          </div>
        </div>

        <div className='flex flex-row flex-wrap justify-center w-full items-center pt-12 -mb-16'>
          <div className='flex flex-col justify-center ml-4 items-start lg:w-1/3 mb-10 w-full lg:mr-20'>
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
          <div className='border-8 border-purple-800 rounded-full lg:w-1/2 w-full'>
            <img className=' border-8 overflow-hidden border-purple-800 rounded-full' src='/images/wizard.png' alt='photo'></img>
          </div>
        </div>
    </div>

    <div className=' bg-violet-900 border-2 border-indigo-900 rounded-full w-full pb-96 -translate-y-52'>
    </div>
</>
    )
}

export default Header;
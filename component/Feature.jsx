import React from "react";

function Feature() {
    return (
        <div className='flex flex-col items-center  w-10/12 bg-blue-50 border-white boreder-2 rounded-3xl p-10 py-20'>

        <div className='flex flex-row flex-wrap items-center justify-around w-11/12'>
          <div className='flex flex-col lg:w-1/3 lg:mr-16 w-full items-center lg:items-start mb-4'>
            <h1 className='text-2xl font-bold w-2/3'>
            Our cool Steps to find right the answer
            </h1>
            <p className='text-sm text-gray-700 px-1 mt-4 mb-4 w-3/4'>
              Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
            </p>
            <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
          </div>

          <div className='lg:w-1/2 w-full lg:p-10 p-2 bg-gradient-to-br from-blue-900 to-fuchsia-700 border border-blue-50 rounded-3xl flex flex-col justify-center items-center'>
            <img className='lg:w-11/12 w-full border border-blue-50 rounded-3xl overflow-hidden' src='/images/chats.png' alt='photo'></img>
          </div>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-around w-11/12 mt-16'>
          <div className='lg:w-96 w-full lg:h-96 bg-gradient-to-tr from-blue-900 to-fuchsia-700 border border-blue-50 rounded-full flex flex-col justify-center items-center mb-4'>
            <img className='lg:w-80 w-full overflow-y-hidden border rounded-b-full translate-y-2 lg:h-96' src='/images/chat.png' alt='photo'></img>
          </div>
          <div className='flex flex-col lg:w-1/3 lg:ml-16 w-full items-center lg:items-start'>
            <h1 className='text-2xl font-bold w-2/3'>
              Turn Conversations Into Legal Brief's 
            </h1>
            <p className='text-sm text-gray-700 px-1 mt-4 mb-4 w-3/4'>
              Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
            </p>
            <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
          </div>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-around w-11/12 mt-16'>
          <div className='flex flex-col lg:w-1/3 lg:mr-16 w-full items-center lg:items-start mb-4'>
            <h1 className='text-2xl font-bold w-2/3'>
            Automate customer support
            </h1>
            <p className='text-sm text-gray-700 px-1 mt-4 mb-4 w-3/4'>
              Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
            </p>
            <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
          </div>

          <div className='lg:w-1/2 w-full lg:p-10 p-2 bg-gradient-to-bl from-blue-900 to-fuchsia-700 border border-blue-50 rounded-3xl flex flex-col justify-center items-center'>
            <img className='w-11/12 border border-blue-50 rounded-3xl overflow-hidden' src='/images/chatss.png'></img>
          </div>
        </div>
      </div>
    )
}

export default Feature;
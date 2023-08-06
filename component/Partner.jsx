import React from "react";

function Partner() {
    return (
        <div className='flex flex-col w-full bg-indigo-900 text-white justify-center items-center py-12 '>
        <div className='flex flex-col justify-center items-center w-3/4'>
          <h1 className='font-bold text-2xl text-center'>
            Relied on By 10,000+ law firms
          </h1>
          <p className='lg:w-2/5 w-full text-center mt-3 mb-8 text-xs'>
            Since 2013, Casetext has been making the difference for solo and small practices, Am Law 100 firms, and in-house legal departments.
          </p>
          <div className='flex flex-row flex-wrap items-center justify-around lg:w-5/6 '>
            <img className='lg:w-20 w-1/2 m-3 lg:m-0' src='/images/dla.png.png' alt='dla'></img>
            <img className='lg:w-40 w-1/2 m-5 lg:m-0' src='/images/ever.png.png' alt='ever'></img>
            <img className='lg:w-20 w-1/2 m-3 lg:m-0' src='/images/fisher.png.png' alt='fisher'></img>
            <img className='lg:w-20 w-1/2 m-3 lg:m-0' src='/images/melveny.png.png' alt='melveny'></img>
            <img className='lg:w-28 w-1/2 m-3 lg:m-0' src='/images/ogle.png.png' alt='ogletrea'></img>
          </div>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-around w-full mt-16'>
          <div className='flex flex-col items-center justify-around bg-indigo-950 lg:w-1/6 w-1/2 p-4 border-2 border-indigo-950 rounded-2xl h-64'>
            <h1 className='font-bold '>If I could give a 7 star rating I would ..</h1>
            <p className='text-xs mt-3 mb-3 text-slate-500 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nisi enim sunt et praesentium inventore corporis? Quibusdam impedit nobis voluptas.</p>
            <div className='flex flex-row justify-start items-start w-full'>
              <img className='w-8 h-8 mr-1.5 border border-indigo-950 rounded-full' src='/images/wizard.png' alt='dp'></img>
              <div>
                <p className='text-xs font-bold'>Marwin McKinney</p>
                <p className='text-xs text-slate-500 font-semibold'>UI UX Designer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
}

export default Partner;
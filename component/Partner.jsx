import React from "react";

function Partner() {
    return (
        <div className='flex flex-col w-full bg-indigo-900 text-white justify-center items-center py-12'>
        <div className='flex flex-col justify-center items-center w-3/4'>
          <h1 className='font-bold text-2xl'>
            Relied on By 10,000+ law firms
          </h1>
          <p className='w-2/5 text-center mt-3 mb-8 text-xs'>
            Since 2013, Casetext has been making the difference for solo and small practices, Am Law 100 firms, and in-house legal departments.
          </p>
          <div className='flex flex-row items-center justify-around w-5/6'>
            <img className='w-20' src='/images/dla.png.png' alt='dla'></img>
            <img className='w-40' src='/images/ever.png.png' alt='ever'></img>
            <img className='w-20' src='/images/fisher.png.png' alt='fisher'></img>
            <img className='w-20' src='/images/melveny.png.png' alt='melveny'></img>
            <img className='w-28' src='/images/ogle.png.png' alt='ogletrea'></img>
          </div>
        </div>

        <div className='flex flex-row items-center justify-around w-full mt-16'>
          <div className='flex flex-col items-center justify-around bg-indigo-950 w-1/6 p-4 border-2 border-indigo-950 rounded-2xl h-64'>
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
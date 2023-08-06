import React from "react";

function More() {
    return (
        <div className='flex flex-col items-center mt-20 w-11/12 px-12 mb-20'>
        <div className='flex flex-row flex-wrap w-full lg:w-1/2 items-center  justify-center'>
          <h1 className='font-bold text-3xl text-center lg:w-1/2 lg:mr-10'>The pioneers in AI for the law</h1>
          <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 lg:w-28 w-52 text-white font-semibold'>Know more</button>
        </div>

        <div className='flex flex-row flex-wrap justify-between items-center mt-10 w-full'>
          <div className='lg:w-1/4 w-full mr-4 bg-sky-50 p-6 lg:h-96 border border-white rounded-2xl mb-5'>
            <img src='/images/icon1.png' alt='icon1' className='w-20 border border-white rounded-full mb-6'></img>
            <h1 className='font-bold text-xl'>Write legal pleadings</h1>
            <p className='mt-4 mb-4 text-slate-600 text-xs'>
              At Legal Wizard, we use AI technology to help lawyers write legal pleadings faster and more efficiently. However, it's important to remember that AI is not a substitute for the attorney's understanding of the applicable law. While our system can provide suggesstions and assistance, it's up to the attorney to ensure that facts, jurisprudence, citations, and case law are correctly represented in their brief.
            </p>
          </div>

          <div className='lg:w-1/4 w-full mr-4 bg-sky-50 p-6 h-96 border border-white rounded-2xl mb-5'>
            <img src='/images/icon2.png' alt='icon1' className='w-20 border border-white rounded-full mb-6'></img>
            <h1 className='font-bold text-xl'>Speed up writing</h1>
            <p className='mt-4 text-slate-600 text-xs'>
              Legal Wizard is simply a tool to help speed up the writing proces, but it should never  be used as a substitute for professional legal advice. Attorneys should always exercise independent professional judgement when utilizing the Legal Wizard platform. 
            </p>
          </div>

          <div className='lg:w-1/4 w-full bg-sky-50 p-6 h-96 border border-white rounded-2xl py-10 mb-5'>
            <img src='/images/icon3.png' alt='icon1' className='w-16 h-16 border border-white rounded-full mb-6'></img>
            <h1 className='font-bold text-xl'>For Attorneys</h1>
            <p className='mt-4 text-slate-600 text-xs'>
              By using Legal Wizard, attorneys agree to the AI and Attorney Responsibility terms of service, which can be found in out Terms of Service agreement. If you have any questions about our platform or our terms of service, please don't hesitate to contact us.
            </p>
          </div>
        </div>

      </div>


    )
}

export default More;
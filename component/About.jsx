import React from "react";

function About() {
    return (
        <div className='flex flex-col justify-center items-center w-full mt-16 mb-16'>

        <div className='flex flex-col justify-center items-center w-2/5'>
          <h1 className='text-2xl font-bold w-3/4 text-center'>
            Advanced Ai tool to create a legal brief like human
          </h1>
          <p className='text-sm text-gray-700 text-center px-1 mt-4 mb-4'>
            Writing legal briefs should not be a tedious and time-consuming task. That's why Legal Wizard created an AI-powered solution that makes writing briefs feel like magic. Our system streamlines the writing process, eliminates writer's block, and allows lawyers to write winning briefs faster and more efficiently than ever before. Let Legal Wizard be your secret weapon in the courtroom, and experience the magic for yourself.
          </p>
          <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
        </div>

      </div>
    )
}

export default About;
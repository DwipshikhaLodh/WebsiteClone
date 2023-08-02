import './App.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import Header from '../component/Header'
import About from '../component/About'
import Feature from '../component/Feature'
import Partner from '../component/Partner'
import More from '../component/More'
import Footer from '../component/Footer'
import Nav from '../component/Nav'


function App() {

  return (
    <div className='text-sm flex flex-col items-center'>
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


      <div className='flex flex-col items-center  w-10/12 bg-blue-50 border-white boreder-2 rounded-3xl p-10 py-20'>

        <div className='flex flex-row  items-center justify-around w-11/12'>
          <div className='flex flex-col w-1/2 mr-16'>
            <h1 className='text-2xl font-bold w-2/3'>
            Our cool Steps to find right the answer
            </h1>
            <p className='text-sm text-gray-700 px-1 mt-4 mb-4 w-3/4'>
              Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
            </p>
            <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
          </div>

          <div className='w-1/2 p-10 bg-gradient-to-br from-blue-900 to-fuchsia-700 border border-blue-50 rounded-3xl flex flex-col justify-center items-center'>
            <img className='w-11/12 border border-blue-50 rounded-3xl overflow-hidden' src='/images/chats.png' alt='photo'></img>
          </div>
        </div>



        <div className='flex flex-row  items-center justify-around w-11/12 mt-16'>
          <div className='w-96 h-96 bg-gradient-to-tr from-blue-900 to-fuchsia-700 border border-blue-50 rounded-full flex flex-col justify-center items-center'>
            <img className='w-80 overflow-y-hidden border rounded-b-full translate-y-2 h-96' src='/images/chat.png' alt='photo'></img>
          </div>


          <div className='flex flex-col w-1/2 ml-16'>
            <h1 className='text-2xl font-bold w-2/3'>
              Turn Conversations Into Legal Brief's 
            </h1>
            <p className='text-sm text-gray-700 px-1 mt-4 mb-4 w-3/4'>
              Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
            </p>
            <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
          </div>
        </div>



        <div className='flex flex-row  items-center justify-around w-11/12 mt-16'>
          <div className='flex flex-col w-1/2 mr-16'>
            <h1 className='text-2xl font-bold w-2/3'>
            Automate customer support
            </h1>
            <p className='text-sm text-gray-700 px-1 mt-4 mb-4 w-3/4'>
              Fast deployment with our expert support. Boost your revenue. Reduce smart operations by over 30% fast deployment with our expert support.
            </p>
            <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Get Started</button>
          </div>

          <div className='w-1/2 p-10 bg-gradient-to-bl from-blue-900 to-fuchsia-700 border border-blue-50 rounded-3xl flex flex-col justify-center items-center'>
            <img className='w-11/12 border border-blue-50 rounded-3xl overflow-hidden' src='/images/chatss.png'></img>
          </div>
        </div>
      </div>


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


      <div className='flex flex-col mt-20 w-11/12 px-12 mb-20'>
        <div className='flex flex-row w-full items-center justify-between '>
          <h1 className='font-bold text-3xl'>The pioneers in AI for the law</h1>
          <button className='border-2 border-orange-500 rounded-full w-30 py-0.5 ml-1 bg-orange-500 text-xs h-9 w-28 text-white font-semibold'>Know more</button>
        </div>

        <div className='flex flex-row justify-between items-center mt-10 w-full'>
          <div className='w-2/3 mr-4 bg-sky-50 p-6 h-80 border border-white rounded-2xl'>
            <img src='/images/icon1.png' alt='icon1' className='w-20 border border-white rounded-full mb-6'></img>
            <h1 className='font-bold text-xl'>Write legal pleadings</h1>
            <p className='mt-4 mb-4 text-slate-600 text-xs'>
              At Legal Wizard, we use AI technology to help lawyers write legal pleadings faster and more efficiently. However, it's important to remember that AI is not a substitute for the attorney's understanding of the applicable law. While our system can provide suggesstions and assistance, it's up to the attorney to ensure that facts, jurisprudence, citations, and case law are correctly represented in their brief.
            </p>
          </div>

          <div className='w-2/3 mr-4 bg-sky-50 p-6 h-80 border border-white rounded-2xl'>
            <img src='/images/icon2.png' alt='icon1' className='w-20 border border-white rounded-full mb-6'></img>
            <h1 className='font-bold text-xl'>Speed up writing</h1>
            <p className='mt-4 text-slate-600 text-xs'>
              Legal Wizard is simply a tool to help speed up the writing proces, but it should never  be used as a substitute for professional legal advice. Attorneys should always exercise independent professional judgement when utilizing the Legal Wizard platform. 
            </p>
          </div>

          <div className='w-2/3 bg-sky-50 p-6 h-80 border border-white rounded-2xl py-10'>
            <img src='/images/icon3.png' alt='icon1' className='w-16 h-16 border border-white rounded-full mb-6'></img>
            <h1 className='font-bold text-xl'>For Attorneys</h1>
            <p className='mt-4 text-slate-600 text-xs'>
              By using Legal Wizard, attorneys agree to the AI and Attorney Responsibility terms of service, which can be found in out Terms of Service agreement. If you have any questions about our platform or our terms of service, please don't hesitate to contact us.
            </p>
          </div>
        </div>

      </div>


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

          <div className='flex flex-row justify-around items-center pb-5 w-full'>
            <img className='w-1/4'></img>
            <ul className='flex flex-row justify-evenly items-center w-2/4 border-t-2 border-indigo-500 pt-10'>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <div className='w-1/4 flex flex-row justify-center items-center pt-10'>
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

    </div>
  )
}

export default App

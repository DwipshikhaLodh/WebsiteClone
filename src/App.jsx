import './App.css'
import Header from '../component/Header'
import About from '../component/About'
import Feature from '../component/Feature'
import Partner from '../component/Partner'
import More from '../component/More'
import Footer from '../component/Footer'


function App() {

  return (
    <div className='text-sm flex flex-col items-center'>
      <Header/>
      <About/>  
      <Feature/>
      <Partner/>
      <More/>
      <Footer/>
    </div>
  )
}

export default App


import Headroom from 'react-headroom'
import './App.css'
import About from './components/About'
import Header from './components/Header'

import Hero from './components/Hero'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <div id="home" className='min-h-screen bg-slate-50 border-box scroll-smooth' >
          <Headroom>
            <Header />
          </Headroom>

          <Hero/>
          <About />
          <Projects />
          <Footer/>
       </div>
    </>
  )
}

export default App

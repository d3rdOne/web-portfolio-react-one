
import Headroom from 'react-headroom'
import './App.css'
import About from './components/About'
import Header from './components/Header'

import Hero from './components/Hero'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <div id="home" className='min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 border-box scroll-smooth' >
          <Headroom>
            <Header />
          </Headroom>

          <Hero/>
          <About />
          <Experience/>
          <Projects />
          <Footer/>
       </div>
    </>
  )
}

export default App

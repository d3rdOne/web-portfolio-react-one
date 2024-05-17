
import './App.css'
import About from './components/About'

import Hero from './components/Hero'

function App() {
  return (
    <>
      <div className='min-h-screen bg-gray-100 border-box scroll-smooth' >
          <Hero/>
          <About />
       </div>
    </>
  )
}

export default App

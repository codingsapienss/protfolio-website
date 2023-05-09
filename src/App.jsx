import './App.scss'
import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import { useState } from 'react'
import Menu from './components/Menu/Menu'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default App
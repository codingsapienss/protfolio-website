import './App.scss'
import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const App = () => {
  return (

    <>
      <div className='app'>
        <Topbar />
        <div className="section">
          <Intro />
          <div className="other">
            <Portfolio />
            <Contact className='contact' />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
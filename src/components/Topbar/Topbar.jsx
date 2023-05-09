import './Topbar.scss'
import { BsFillPersonFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
const topbar = ({menuOpen , setMenuOpen}) => {
  return (


    <div id='topbar' className={ `topbar ${menuOpen ? 'active' : '' }`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>@imprsant</a>
          
          <div className="itemContainer">
              <BsFillPersonFill className='icon'/>
            <span>09838890179</span>
          </div>
          <div className="itemContainer">
              <GrMail className='icon'/>
            <span>contactprsant@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div onClick={()=>{setMenuOpen(!menuOpen)}} className="hamburger">
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default topbar
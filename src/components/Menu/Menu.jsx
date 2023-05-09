/* eslint-disable react/prop-types */
import './Menu.scss'

const Menu = ({menuOpen , setMenuOpen}) => {
  return (
    <div className={` menu ${menuOpen ? 'active' : ''}`}>
        <ul  onClick= {(e)=>{ if( e.target.tagName == 'A') {setMenuOpen(false)}  }} >

            <li ><a href="#intro"> Home </a></li>
            <li><a href="#portfolio"> Portfolio </a></li>
            <li><a href="#work"> Work </a></li>
            <li><a href="#contact"> Contact </a></li>
        </ul> 
    </div>
  )
}

export default Menu
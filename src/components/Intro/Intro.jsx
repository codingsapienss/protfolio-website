import { useEffect,useRef } from 'react'
import './Intro.scss'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { init } from 'ityped'
const Intro = () => {

  const textRef = useRef()

  useEffect(()=>{
    init(textRef.current, { showCursor: true  ,  backDelay:  2000, strings: [ 'Front-end Developer' , 'React Developer', 'Writer' ] })
  }, [])
  return (
    <div id='intro' className='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="src\assets\prashant.png" alt="Prashant" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hii There, I am </h2>
          <h1>Prashant Sharma </h1>
          <h3> - <span ref={textRef}></span> </h3>
          <a href="#portfolio">
          <BsChevronDoubleDown/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
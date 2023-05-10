import { useEffect, useRef } from 'react'
import './Intro.scss'
import { BsChevronDoubleDown, BsFillPersonFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { init } from 'ityped'
import { GrMail } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import prashant from '../../assets/prashant.png'


const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, { showCursor: true, backDelay: 2000, strings: ['Front-end Developer', 'React Developer', 'Writer'] })
  }, [])
  return (
    <div id='intro' className='intro'>
      <div className="mainContainer">

        <div className="imgContainer">
          <img src={prashant} alt="Prashant" />
        </div>

        <div className="details">
          <h2>Hii There, I am </h2>
          <h1>Prashant Sharma </h1>
          <h3> - <span ref={textRef}></span> </h3>
          <div className="contactDetails">
            <div className="social">

              <div className="github">
                <a href="https://github.com/imprsant" target='-blank' rel='norefferer'>
                  <BsGithub className='icon' />
                </a>
              </div>

              <div className="twitter">
                <a href="https://twitter.com/im_prsant" target='-blank' rel='norefferer' >
                  <BsTwitter className='icon' />
                </a>
              </div>

              <div className="linkdin">
                <a href="https://www.linkedin.com/in/imprsant/" target='-blank' rel='norefferer' >
                  <BsLinkedin className='icon' />
                </a>
              </div>


              <div className="insta">
                <a href="https://www.instagram.com/im_prsant/" target='-blank' rel='norefferer'>
                  <AiFillInstagram className='icon' />
                </a>
              </div>
            </div>

            <div className="contact">
              <div className="itemContainer">
                <BsFillPersonFill className='icon' />
                <span> Contact :  09838890179</span>
              </div>
              <div className="itemContainer">
                <GrMail className='icon' />
                <span> Email : contactprsant@gmail.com</span>
              </div>

            </div>
          </div>

          <a className='next' href="#portfolio">
            <BsChevronDoubleDown />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro

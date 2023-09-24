import { useEffect, useRef } from 'react'
import './Intro.scss'
import { BsChevronDoubleDown, BsFillPersonFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { init } from 'ityped'
import { GrMail } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
// import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoRedux } from 'react-icons/bi';
// import { FaSass } from 'react-icons/fa';
// import { SiMui } from 'react-icons/si';




const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, { showCursor: true, backDelay: 2000, strings: ['Front-end Developer', 'Javascript + React Developer', 'Writer', 'Coding Sapiens'] })
  }, [])
  return (

    <>

      <div id='intro' className='intro'>

        <div className="mainContainer">

          <div className="imgContainer">
            <img src='\prashant.png' alt="Prashant" />
          </div>
          <div className="details">
            <h2>Hii There, I am </h2>
            <h1>Prashant Sharma </h1>


            <h3> - <span ref={textRef}></span> </h3>

            <div className="contactDetails">
              <div className="social">

                <div className="github">
                  <a href="https://github.com/codingsapienss" target='-blank' rel='norefferer'>
                    <BsGithub className='icon' />
                  </a>
                </div>

                <div className="twitter">
                  <a href="https://twitter.com/codingsapiens" target='-blank' rel='norefferer' >
                    <BsTwitter className='icon' />
                  </a>
                </div>

                <div className="linkdin">
                  <a href="https://www.linkedin.com/in/codingsapiens/" target='-blank' rel='norefferer' >
                    <BsLinkedin className='icon' />
                  </a>
                </div>


                <div className="insta">
                  <a href="https://www.instagram.com/codingsapiens/" target='-blank' rel='norefferer'>
                    <AiFillInstagram className='icon' />
                  </a>
                </div>
              </div>

              <div className="contact">
                <div className="itemContainer">
                  <BsFillPersonFill className='icon' />
                  <span><a href="tel:09838890179">09838890179</a></span>
                </div>
                <div className="itemContainer">
                  <GrMail className='icon' />
                  <span> <a href="mailto:contactprsant@gmail.com">contactprsant@gmail.com</a></span>
                </div>

              </div>
            </div>

            {/* <div className="techStack">
            <span> Tech Stack : </span>

            <span className='logoContainer'>
              <BiLogoHtml5 className='logo' />
              <BiLogoCss3 className='logo' />
              <FaSass className='logo' />
              <BsBootstrapFill className='logo' />
              <BiLogoJavascript className='logo' />
              <BiLogoReact className='logo' />
              <SiMui className='logo' />
              <BiLogoRedux className='logo' />

            </span>

          </div> */}

            <a className='next' href="#portfolio">
              <BsChevronDoubleDown />
            </a>
          </div>
        </div>
      </div >
    </>
  )
}

export default Intro

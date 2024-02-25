import { useEffect, useRef } from "react";
import "./Intro.scss";
import {
  BsChevronDoubleDown,
  BsFillPersonFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { init } from "ityped";
import { GrMail } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      strings: [
        "Frontend Developer @makeAr.ai",
        "Javascript + React Developer",
        "Coding Sapiens",
        "Writer",
      ],
    });
  }, []);
  return (
    <>
      <div id="intro" className="intro">
        <div className="mainContainer">
          <div className="imgContainer">
            <img src="\profile-img.png" alt="Prashant" />
          </div>
          <div className="details">
            <h2>Hii There, I am </h2>
            <h1>Prashant Sharma </h1>

            <h3>
              {" "}
              - <span ref={textRef}></span>{" "}
            </h3>

            <div className="contactDetails">
              <div className="social">
                <div className="github">
                  <a
                    href="https://github.com/codingsapienss"
                    target="-blank"
                    rel="norefferer"
                  >
                    <BsGithub className="icon" />
                  </a>
                </div>

                <div className="twitter">
                  <a
                    href="https://twitter.com/codingsapiens"
                    target="-blank"
                    rel="norefferer"
                  >
                    <BsTwitter className="icon" />
                  </a>
                </div>

                <div className="linkdin">
                  <a
                    href="https://www.linkedin.com/in/codingsapiens/"
                    target="-blank"
                    rel="norefferer"
                  >
                    <BsLinkedin className="icon" />
                  </a>
                </div>

                <div className="insta">
                  <a
                    href="https://www.instagram.com/codingsapiens/"
                    target="-blank"
                    rel="norefferer"
                  >
                    <AiFillInstagram className="icon" />
                  </a>
                </div>
              </div>

              <div className="contact">
                <div className="itemContainer">
                  <BsFillPersonFill className="icon" />
                  <span>
                    <a href="tel:09838890179">09838890179</a>
                  </span>
                </div>
                <div className="itemContainer">
                  <GrMail className="icon" />
                  <span>
                    {" "}
                    <a href="mailto:contactprsant@gmail.com">
                      contactprsant@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <a className="next" href="#portfolio">
              <BsChevronDoubleDown />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

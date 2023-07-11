import './Contact.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillPersonFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chcz8ov', 'template_ql4c3rr', form.current, 'nqUMiI5ovBHelmM8l')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };


  return (

    <div id='contact' className='contact'>
      <div className="contactContainer">

        <div className="img">
          <img src="./contact_us.png" alt="contact_us_logo" />
        </div>

        <form ref={form} className='form' onSubmit={sendEmail}>
          <h1> Contact Me </h1>
          <input required placeholder='Enter your name' type="text" name="user_name" />
          <input required placeholder='Enter your email' type="email" name="user_email" />
          <textarea required placeholder='Enter your message' rows='5' name="message" />
          <input type="submit" value="Send" />
        </form>

      </div>



      <div className="socialLinks">
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
          {/* <div className="gmail">
          <a href="contactprsant@gmail.com" target='-blank'> <img src="" alt="gmail" /></a>
          </div> */}
        </div>



        <div className="contact">
          <div className="itemContainer">
            <BsFillPersonFill className='icon' />
            <span> <a href="tel:09838890179">09838890179</a></span>
          </div>
          <div className="itemContainer">
            <GrMail className='icon' />
            <span> <a href="mailto:contactprsant@gmail.com">contactprsant@gmail.com</a></span>
          </div>

        </div>
        <p>- Made with 💖 by Prashant Sharma</p>
      </div>
    </div>
  )
}

export default Contact
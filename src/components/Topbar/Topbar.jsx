import './Topbar.scss'

const topbar = () => {
  return (
    <div id='topbar' className='topbar'>
      <a href="#intro" className='logo'>Coding Sapiens
      </a>

      <a target='_blank' rel="noreferrer" id='resume' href="https://drive.google.com/file/d/1fh_aFvK-R-mw8YK_BMPtZsYfPZ6gqxol/view?usp=drive_link" > Resume
      </a>
    </div>
  )
}

export default topbar
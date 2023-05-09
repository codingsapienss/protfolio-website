
import { useState } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'
import {reactProjects} from '../../data'

const Portfolio = () => {

  const [selected, setSelected] = useState('featured')

  const list = [
    { id : 'featured',
    title : 'Featured'},

    { id : 'react',
    title : 'React Projects'},  

    { id : 'javascript',
    title : 'Javascript Projects'},
  ]

  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <ul >
       {list.map ((item)=>{
        return  <PortfolioList active={selected === item.id} setSelected={setSelected} key={item.id} title={item.title} id={item.id}/>
       })}
      </ul>

      <div className="container">

       {
          reactProjects.map((project)=>{
              return <>
              
              <div key={project.id} className="item">
                            <a href={project.link} target='_blank' rel="noreferrer">
                                <img src={project.img} alt="project-thumbnail" /> 
                             </a>
                            <h3> {project.title} </h3>
                        </div>
              
              </>


          })
         

       }
        
       
      </div>
    </div>
  )
}

export default Portfolio
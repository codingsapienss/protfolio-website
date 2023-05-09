/* eslint-disable react/prop-types */
import './PortfolioList.scss'

const PortfolioList = ({title,active, setSelected, id}) => {
  return (
    <li className={active ? 'active' : ''} 
        onClick={()=>{setSelected(id)}}
        >{title}</li>
  )
}

export default PortfolioList
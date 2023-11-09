import './header.css'
import img_logotype from '../../assets/Images/logotype.svg'
import Contactinformation from './Contactinformation'
import Socialmedia from './Socialmedia'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import MenuMini from './MenuMini'


function Header() {


  return (
    <header>
      <div className="container">
          <div className="logotype">
            <Link to="/"><img src={img_logotype} alt="crito logo"/></Link>
          </div>

          <Contactinformation />
          <Socialmedia />
          <Menu />
          <MenuMini />
          
      </div>
    </header>
  )
}

export default Header
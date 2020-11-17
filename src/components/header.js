import './header.css'
import logo from './images/logo.png'

function header(){
    return(
        <div className="header">
           <div className="header__logo">
                <img src={logo}></img>
           </div>
           <div className="header__content">
               All menus here 
           </div>
        </div>
    )
}
export default header;


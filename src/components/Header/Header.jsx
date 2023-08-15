import React, {useRef} from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Logo from './img/logo.png';
import Polygon from './img/Polygon.svg'

export default function Header(props) {

  const polygon = useRef(null);
  const navigate = useNavigate();

   const profileMouseOn = () => {
   polygon.current.classList.toggle('header__polygon_hover')
   }
  
   const profileMouseL = () => {
    polygon.current.classList.toggle('header__polygon_hover')
   }

   const profileClick = () => {
    polygon.current.classList.toggle('header__polygon_clicked')
   }

   const LogOut = () =>{
    navigate('/')
   }
  

  return (
    <div className="header">
        <div className="header__left">
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
            <h1>NZ</h1>
          </div>
        </div>
        <div className="header__right">
            <div className="header__profile" onMouseEnter={profileMouseOn} onMouseLeave={profileMouseL} onClick={profileClick}>
                <div className="header__polygon" ref={polygon}>
                    <img src={Polygon} alt="polygon" />
                </div>
                <div className="header__userName">{props.name} {props.surname}</div>
            </div>
            <div className="header__btn header__btn_logOut" onClick={LogOut}>Log Out</div>
        </div>
    </div>
  )
}

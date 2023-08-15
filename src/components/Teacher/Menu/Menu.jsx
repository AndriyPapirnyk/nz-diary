import React, {useRef} from 'react';
import './Menu.css';

export default function Menu() {

  const menu = useRef(null)

  const changeRoom = (e) => {
    let target = e.target;
    if(target.getAttribute("class") === 'menu__item'){
        for (const child of menu.current.childNodes) {
            if(true){
             child.classList.remove('menu__item_active')
            }
        }
        target.classList.toggle('menu__item_active');
    }
  }

  return (
    <div className="menu" ref={menu} onClick={changeRoom}>
        <div className="menu__item menu__item_active">Rooms</div>
        <div className="menu__item">NZ Chat</div>
        <div className="menu__item">Todo</div>
        <div className="menu__item">Settings</div>
    </div>
  )

  }
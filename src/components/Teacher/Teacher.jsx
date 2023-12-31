import React from 'react';
import Header from '../Header/Header';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import Rooms from './Rooms/Rooms';
import './Teacher.css';


export default function Teacher({userData}) {
  return (
    <div className="teacher">
      <div className="teacher__container">
        <Header name={ userData == null ? 'ostap' : userData.name} surname={userData == null ? 'ostap' : userData.surname} />
        <div className="teacher__main">
          <div className="teacher__main__left">
            <Menu />
          </div>
          <div className="teacher__main__right">
            <Search amountRoom={ userData == null ? 100 : userData.amountRoom}/>
            <Rooms amountRoom={ userData == null ? 0 : userData.amountRoom}/>
          </div>
        </div>
      </div>
    </div>
  )
}

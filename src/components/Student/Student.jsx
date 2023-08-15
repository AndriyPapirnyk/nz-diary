import React from 'react';
import './Student.css';
import Header from '../Header/Header';


export default function ({userData}) {
  return (
    <div className="student">
      <div className="student__container">
        <Header name={ userData == null ? 'ostap' : userData.name} surname={userData == null ? 'ostap' : userData.surname} />
      </div>
    </div>
  )
}

import React from 'react';
import './Rooms.css';
import addRoomImg from './img/addRoom.svg';
import Plus from './img/plus.svg';

export default function Rooms(props) {
  return (
    <div className="rooms">
       {props.amountRoom === 0 ?  
       <div className="rooms__addRoom">
        <div className="rooms__addRoom__img">
            <img src={addRoomImg} alt="" />
        </div>
        <p className="rooms__text">Add room to start working</p>
        <div className="rooms__addRoom__btn">
            <div className="rooms__addRoom__plus">
                <img src={Plus} alt="plus" />
            </div>
            Create room...
        </div>
       </div> 
       : 
       <div className="rooms__addRoom"></div>}
    </div>
  )
}

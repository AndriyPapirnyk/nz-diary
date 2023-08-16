import React from 'react';
import './Search.css';

export default function Search(props) {
  return (
    <div className="search">
        <input type="text" className='search__inp' placeholder='Search...' />
        <p className="search__text">Room: {props.amountRoom}</p>
    </div>
  )
}

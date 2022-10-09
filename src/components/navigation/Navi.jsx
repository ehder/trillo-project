import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {FiKey} from 'react-icons/fi';
import {FaPlaneDeparture} from 'react-icons/fa';
import {BiMapAlt} from 'react-icons/bi';

const Navi = () => {
  return (
    <div className='sidebar'>
        <ul className="side-nav">
          
          <li className="side-nav__item side-nav__item--active">
            <a href="#" className="side-nav__link">
              <AiOutlineHome className='side-nav__icon'/>
              <span>Hotel</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <FaPlaneDeparture className='side-nav__icon'/>
              <span>Flight</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <FiKey className='side-nav__icon'/>
              <span>Car Rental</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <BiMapAlt className='side-nav__icon'/>
              <span>Tours</span>
            </a>
          </li>
        </ul>


        <div className="legal">
          @copy; 2017 by trillo. All rights reserved.
        </div>
    </div>
  )
}

export default Navi
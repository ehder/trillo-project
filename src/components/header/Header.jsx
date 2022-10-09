import React from 'react'
import logo from '../../assets/logo/logo.png'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineRightCircle} from 'react-icons/ai';
import {GoBookmark} from 'react-icons/go';
import {BiChat} from 'react-icons/bi';


import user from '../../assets/img/p3.jpg';

//https://icomoon.io/

const Header = () => {
  return (
    <div className='header'>
        <div className='wrap'><img src={logo} alt="trillo logo" className='logo' /></div>

        <form className='search' action="#">
            <input type="text" className="search__input" placeholder='search hotel'/>
            <button className="search__button">
                <BsSearch className='search__icon'/>
            </button>
        </form>

        <nav className='user-nav'>
            <div className="user-nav__icon-box">
                <GoBookmark className='user-nav__icon'/>
                <span className="user-nav__notification">7</span>
            </div>

            <div className="user-nav__icon-box">
                <BiChat className='user-nav__icon'/>
                <span className="user-nav__notification">30</span>

            </div>

            <div className="user-nav__user">
                <img src={user} alt="user image" className='user-nav__user-photo'/>
                <span className="user-nav__user-name">Saw Eh Dar Ler</span>
            </div>

        </nav>
    </div>
  )
}

export default Header
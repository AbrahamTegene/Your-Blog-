import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/blogs.png'
// import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa';


const Header = () => {
  const [isNewShowing, setIsNewShowing] = useState(window.innerWidth > 800 ? true : false)

  const closeNavHandler = () => {
    if(window.innerWidth < 800) {
      setIsNewShowing(false);
  } else{
    setIsNewShowing(true);
  }
}
  return (
    <nav>
        <div className="container nav_container">
          <Link to={'/'} className='nav__logo'>
            <img src={logo} alt="" />
          </Link>
          <ul className="nav__menu">
            <li> <Link to='/profile/sdfsdf'>Profile</Link></li>
            <li> <Link to='/Create'>Create Post</Link></li>
            <li> <Link to='/authors'>Authors</Link></li>
            <li> <Link to='/logout'>Logout</Link></li>
          </ul>
          <button className="nav__toggle-btn" onClick={() => setIsNewShowing(!isNewShowing)}>
            {isNewShowing ? < AiOutlineClose/> : <FaBars/>}
          </button>
        </div>
    </nav>
  )
}

export default Header
import React from 'react'
import './header.css'
import CTA from './CTA'
import Snapshot from '../../assets/profilePic.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Artem Maryanskyy</h1>
         <h5 className="text-light">Computer Science and Business Student @ Lehigh University</h5>
         <CTA/>
         <HeaderSocials/>
          <div className="snapshot">
            <img src={Snapshot} alt="profilePic" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header
import React from 'react'
import {ImGithub} from 'react-icons/im'
import {IoLogoLinkedin} from 'react-icons/io'
import {FaTelegram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Findmebear" target="_blank"><ImGithub/></a>
        <a href="https://www.linkedin.com/in/artem-m/" target="_blank"><IoLogoLinkedin/></a>
        <a href="https://t.me/findmebear" target="_blank"><FaTelegram/></a>
    </div>
  )
}

export default HeaderSocials
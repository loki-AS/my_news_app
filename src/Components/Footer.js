import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const fullDate = new Date().getFullYear();
  return (
      <div className="my-bg"> 
          <div className="py-3 footer container">
          <InstagramIcon fontSize="large" className="my-icon"/>
          <FacebookIcon fontSize="large" className="my-icon" />
          <TwitterIcon fontSize="large" className="my-icon" />
          <hr className='my-hr' />
          ©COPYRIGHT {fullDate}
          </div>
      </div>
  )
}

export default Footer
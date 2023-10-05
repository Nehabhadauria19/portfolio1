import React from 'react'
import './navbar.css'
import logo from '../../assets/Untitled design.png'
import { Link } from 'react-scroll'



const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
    <img src={logo} alt="logo" className='logo' />
    <div className='desktopMenu'>
   <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className='desktopmenuListItem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={1000} className='desktopmenuListItem'>Skills</Link>
    <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={1000} className='desktopmenuListItem'>Projects</Link>
    
    <Link activeClass='active' to='edu' spy={true} smooth={true} offset={-100} duration={1000} className='desktopmenuListItem'>Education</Link>
    </div>
    

    
    </nav>
</>
    
  )
}

export default Navbar
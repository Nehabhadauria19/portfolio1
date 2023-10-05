import React from 'react'
import './intro.css'
import bg from '../../assets/WhatsApp Image 2023-01-13 at 22.18.56.jpg'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
   <section id="intro">
   <div className="introContent">
   <span className='hello'>Hello,</span>
   <span className="introText">I'm <span className="introName">NEHA BHADAURIA</span><br />Aspiring Engineer</span>
   <p className="introPara">"Where imagination meets creativity!"</p>
   <Link><button className='btn'><img src={btnImg} className="btnImg"alt="" />Hire Me!</button></Link>
   <p className='resume'><a href="https://drive.google.com/file/d/18aSo1tlT0U72zeMcqHlWPLTgL3-IhtTo/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a></p>
   </div>
   <img src={bg}  alt="Profile" className="bg" />
   </section>
  )
}

export default Intro
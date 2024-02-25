import React from 'react'
import './works.css'
import p1 from '../../assets/portfolio-3.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-1.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
   <section id="Works">
    <h2 className="worksTitle">MY PROJECTS!</h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details. I am excited to bring my skills and achievements to you.</span>
    <div className="worksImgs">
   <a href="https://weatherforecasting-app.netlify.app/" target="_blank" rel="noopener noreferrer"><p className='para'>WEATHER APP (click)</p><img src={p6} alt="" className='worksImg' /></a>
       <a href="https://eloquent-hodgkin-9f52a3.netlify.app/" target="_blank" rel="noopener noreferrer"><p className='para'>MEAL RECIPE FINDER (click)</p><img src={p1} alt="" className='worksImg' /></a>
       <a href="https://covid-19-viruss.netlify.app/" target="_blank" rel="noopener noreferrer"><p className='para'>COVID-19 TRACKER (click)</p><img src={p4} alt="" className='worksImg' /></a>
   <a href="http://parallax-scrolling-19.netlify.app" target="_blank" rel="noopener noreferrer"><p className='para'>PARALLAX SCROLLING EFFECT (click) </p><img src={p2} alt="" className='worksImg'/> </a>
   <a href="http://dark-19light.netlify.app" target="_blank" rel="noopener noreferrer"><p className='para'>DARK MODE EFFECT (click) </p><img src={p3} alt="" className='worksImg'/></a>
   <div><p className='para'>KNIGHT BITE FOOD WEBSITE </p><img src={p5} alt="" className='worksImg'/></div>
       <a href="https://todo-app-reactneha.netlify.app/" target="_blank" rel="noopener noreferrer"><p className='para'>TO-DO WEBSITE (click)</p><img src={p4} alt="" className='worksImg' /></a>
   <a href="https://assignment19.netlify.app" target="_blank" rel="noopener noreferrer"><p className='para'>EMPLOYEE's OVERVIEW (click) </p><img src={p6} alt="" className='worksImg'/></a>
   <div><p className='para'>BANK ACCOUNT DETAILS in JAVA </p> <img src={p4} alt="" className='worksImg'/></div>

    </div>
   </section>
  )
}

export default Works

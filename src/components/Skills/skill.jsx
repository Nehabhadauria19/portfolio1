import React from 'react'
import './skill.css'
import backend from '../../assets/backend.png'
import frontend from '../../assets/coding.png'
import database from '../../assets/database.png'

const Skill = () => {
  return (
    <section id="skills">
    <span className='skillTitle'>What I DO?</span>
    <span className="skillDescription">I am a fast learner. I am proficient in HTML, CSS, JAVASCRIPT, REACTJS, and SQL as well as in JAVA. </span>
    <div className="skillBars">
      <div className="skillBar">
      <img src={backend} alt="" className="skillbarImg" />
      <div className="skillbarText">
      <h2>JAVA LANGUAGE</h2>
      <p>Expertise in Core Java concept includes OOPS concept and Exceptional Handling concept.</p>
      </div>
      </div>
      <div className="skillBar">
      <img src={frontend} alt="" className="skillbarImg" />
      <div className="skillbarText">
      <h2>FRONTEND EXPERTISE</h2>
      <p>Proficient in HTML,CSS,JAVASCRIPT and REACTJS.</p>
      </div>
      </div>
      <div className="skillBar">
      <img src={database} alt="" className="skillbarImg"  />
      <div className="skillbarText">
      <h2>SQL DATABASE</h2>
      <p>Well-versed in relational database concepts.</p>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Skill
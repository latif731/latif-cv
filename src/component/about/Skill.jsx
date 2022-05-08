import React from 'react'
import './skill.css'

const frontendSkill = [
    {
        title: 'Javascript',
        width: '85%',
        percentage:'85%'
    },
    {
        title: 'Reactjs',
        width: '85%',
        percentage:'85%'
    },
    {
        title: 'Redux',
        width: '85%',
        percentage:'85%'
    },
    {
        title: 'bootstrap',
        width: '85%',
        percentage:'85%'
    },
]

const graphicDesign = [
    {
        title: 'Photoshop',
        width: '85%',
        percentage:'85%'
    },
    {
        title: 'CorelDraw',
        width: '85%',
        percentage:'85%'
    },
]

const Skill = () => {
  return <div className='skill_wrapper d-flex justify-content-between'>
      <div className="frontend_skill">
          {
              frontendSkill.map((item,index) =>(
                  <div className="skill_data">
                      <div className="skill_title">
                          <h6>{item.title}</h6>
                          <span>{item.percentage}</span>
                      </div>
                      <div className="skill_bar">
                          <span className="skill_bar-percentage">

                          </span>
                      </div>
                  </div>
              ))
          }
      </div>
      <div className="graphicdesign_skill"></div>
  </div>
}

export default Skill
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
  return <div className='skill_wrapper'>
      <div className="frontend_skill">
          {
              frontendSkill.map((item,index) =>(
                  <SkillItem
                  key={index}
                  title={item.title}
                  percentage={item.percentage}
                  />       
              ))
          }
      </div>
      <div className="graphicdesign_skill">
          {
              graphicDesign.map((item, index) => (
                  <SkillItem
                  key={index}
                  title={item.title}
                  percentage={item.percentage}
                  />
              ))
          }

      </div>
  </div>
}

const SkillItem = ({title, percentage}) => {
    return (
    <div className="skill_data">
    <div className="skill_title">
        <h6>{title}</h6>
        <div className="percent">
        <span>{percentage}</span>
        </div>
    </div>
    <div className="skill_bar">
        <span className="skill_bar-percentage" style={{width: `${percentage}`}}>

        </span>
    </div>
</div>
)
}

export default Skill
import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './experience.css'

const developmentExp = [
    {
        year: '2020 - 2021',
        title: 'Sr. Frontend Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium optio corporis'
    },
    {
        year: '2020 - 2021',
        title: 'Sr. Frontend Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium optio corporis'
    },
    {
        year: '2020 - 2021',
        title: 'Sr. Frontend Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium optio corporis'
    },
    {
        year: '2020 - 2021',
        title: 'Sr. Frontend Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium optio corporis'
    },
]

const Experience = () => {
  return (
    <section id="Experience">
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <h2>Experience</h2>
                </Col>

                <Col lg="6" md='6'>

                    <div className="single_experience-container">
                    {
                        developmentExp.map((item, index) => (
                        <div className="single_experience" key={index}>
                            <span className="experience_icon"><i class="ri-briefcase-line"></i></span>
                            <h6>{item.year}</h6>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                        ))
                    }
                    </div>
                </Col>

                <Col lg="6" md='6'>

                    <div className="single_experience-container">
                    {
                        developmentExp.map((item, index) => (
                        <div className="single_experience" key={index}>
                            <span className="experience_icon"><i class="ri-briefcase-line"></i></span>
                            <h6>{item.year}</h6>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                        ))
                    }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Experience
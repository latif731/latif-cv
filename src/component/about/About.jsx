import React,{useState} from 'react'
import './about.css'
import {Container, Row, Col} from 'reactstrap';
import aboutImg from '../../asset/image/latif.png'

import Education from './Education'

import Skill from './Skill'

const About = () => {

    const[aboutFilter, setAboutFilter] = useState('ABOUT')


  return <section id='about'>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
            <h2>About Me</h2>
            </Col>
            <Col lg='4' md='3'>
            <div className="about_btns">
                <button className="about_btn about_btn-active" onClick={()=>setAboutFilter("ABOUT")}>About Me</button>
                <button className="about_btn" onClick={()=>setAboutFilter("EDUCATION")}>Education</button>
                <button className="about_btn"onClick={()=>setAboutFilter("SKILL")}>Skills</button>
                <button className="about_btn">Award</button>
            </div>
            </Col>
            <Col lg='8' md='9'>

                {
                    aboutFilter === 'ABOUT' &&  <div className="about_content_wrapper">
                    <div className="about_img">
                        <img src={aboutImg} alt="" className='latifabout'/>
                    </div>
                    <div className="about_content w-75">
                        <h2>I'm Latif Budi Pamungkas</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error temporibus magnam, 
                            repudiandae molestias consequatur accusamus? Officiis, incidunt! Earum, 
                            alias molestiae ad officiis aspernatur temporibus esse quam sapiente, 
                            nulla accusantium accusamus?
                        </p>
                        <div className="social_link">
                            <h6>Contact With Me:</h6>
                            <span className='link'><i class="ri-facebook-line"></i></span>
                            <span className='link'><i class="ri-gitlab-line"></i></span>
                            <span className='link'><i class="ri-github-line"></i></span>
                            <span className='link'><i class="ri-linkedin-line"></i></span>
                        </div>

                    </div>
                </div> 
                }

                {
                    aboutFilter === "EDUCATION" && <Education/>
                }

                {
                    aboutFilter === "SKILL" && <Skill/>
                }
          
            </Col>
        </Row>
    </Container>
  </section>
}

export default About
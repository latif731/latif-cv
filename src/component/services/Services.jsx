import React from 'react'
import {Container, Row, Col, NavItem} from 'reactstrap'
import './service.css'


const serviceData = [
    {
        icon: 'ri-code-line',
        title: 'web design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: 'web design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: 'web design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: 'web design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: 'web design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: 'web design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
]


const Services = () => {
  return (
    <section id="services">
        <Container>
            <Row>
                <Col lg='12' className="service_top">
                    <h6>Features</h6>
                    <h2>What Services I Provide</h2>
                </Col>

                {
                    serviceData.map((item, index) => (
                <Col lg="4" md="6" sm="6" className="mb-4" key={index}>
                    <div className="single_service">
                        <span className="service_icon">
                        <i class={item.icon}></i>
                        </span>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                </Col>                  
                    ))
                }

            </Row>
        </Container>
    </section>
  )
}

export default Services
import React from 'react'
import './contact.css'
import {Container, Row, Col} from 'reactstrap'
import Form from '../form/Form'

const Contact = () => {
  return (
    <section id='contact'>
        <Container>

        <Row>
            <Col lg='12'>
                <h2>Get In Touch</h2>
            </Col>

            <Col lg='6' md='6'>
                <div className="contact_info_container d-flex align-items-center gap-5">
                    <div className="single_info-box  w-50">
                        <h6>Address</h6>
                        <p>Bangladeslsdfmgkl;ms</p>
                    </div>
                    <div className="single_info-box w-50">
                        <h6>Phone</h6>
                        <p>085782244135</p>
                    </div>
                </div>
                <div className="contact_info_container d-flex align-items-center gap-5">
                    <div className="single_info-box w-50">
                        <h6>Email</h6>
                        <p>pamungkaslatifbudi@gmail.com</p>
                    </div>
                    <div className="single_info-box w-50">
                        <h6>Location</h6>
                        <p>Ds. Jatirejo Rt.12/Rw.02 Kec. Wonoasri Kab. Madiun</p>
                    </div>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <Form/>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Contact
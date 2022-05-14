import React from 'react'
import './contact.css'
import {Container, Row, Col} from 'reactstrap'
import Form from '../form/Form'
import Map from '../map/Map'

const Contact = () => {
  return (
    <section id='contact'>
        <Container>

        <Row>
            <Col lg='12'>
                <h2>Get In Touch</h2>
            </Col>
            <div className='bbbb'>
                <div className="contact_info_container">
                    <div className="single_info-box ">
                        <h6>Address</h6>
                        <p>Ds. Jatirejo Rt. 12/Rw. 02 Kec. Wonoasri Kab. Madiun</p>
                    </div>
                    <div className="single_info-box">
                        <h6>Phone</h6>
                        <p>085782244135</p>
                    </div>
                    <div className="single_info-box">
                        <h6>Email</h6>
                        <p>pamungkaslatifbudi@gmail.com</p>
                    </div> 
                </div>
                <div className='single_info-box4'>
                    <h6>Location</h6>
                <Map/>
                </div>
            </div>
            <div className='single_info-box'>
                <Form/>
            </div>
        </Row>
        </Container>
    </section>
  )
}

export default Contact
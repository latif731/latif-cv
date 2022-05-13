import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const MapGoogle = () => {
  return (
    <div>
        <Container>
            <Row>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9663216173026!2d111.61108346513237!3d-7.5786449445348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79b8861b6b7751%3A0x4ceadace36e211e!2sJatirejo%20I%2C%20Jatirejo%2C%20Kec.%20Wonoasri%2C%20Kabupaten%20Madiun%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1652426589057!5m2!1sid!2sid" width={"600"} height={"450"} style={"border:0;"} allowfullscreen={""} loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
            </Row>
        </Container>
    </div>
  )
}

export default MapGoogle
// import React from 'react'
// import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

// import { Container, Row, Col } from 'reactstrap'

// function Maping() {
//   return (
//     <GoogleMap defaultZoom={10} defaultCenter={{lat:-7.581182, lng:111.616061}}/>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Maping))

// export default function Map() {
//   return (
//   <div style={{widht:"100vw", heigh:"100vh"}}>
//     <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDQD8AYnp3ckM2IrYC6ZmLmkQHAMHKZtkU&v=3.exp&libraries=geometry,drawing,places`}
//     loadingElement={<div style={{ height: `100%` }} />}
//     containerElement={<div style={{ height: `400px` }} />}
//     mapElement={<div style={{ height: `100%` }} />}
//     />
//   </div>

//   )
// }

import React from 'react'

const Map = () => {
  return (
    <div>
    <iframe width="480" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Jatirejo,wonoasri&t=k&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
    </div>
  )
}

export default Map

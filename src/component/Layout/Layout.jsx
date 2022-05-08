import React, { Fragment } from 'react'
import Header from '../Header/Header'
import HeroSection from '../hero-section/HeroSection'
import About from '../about/About'
 
const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <About/>
    </Fragment>
  )
}

export default Layout
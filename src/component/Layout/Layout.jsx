import React, { Fragment } from 'react'
import Header from '../Header/Header'
import HeroSection from '../hero-section/HeroSection'
import About from '../about/About'
import Services from '../services/Services'
import Experience from '../experience/Experience'
import Portfolio from '../portofolio/Portfolio'

const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
    </Fragment>
  )
}

export default Layout
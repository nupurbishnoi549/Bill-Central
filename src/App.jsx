import React from 'react'
import Hero from './components/Hero'
import CompaniesLogo from './components/CompanyLogo'
import EnergyPlans from './components/EnergyPlan'
import SimpleSteps from './components/SimpleSteps'
import Comprehensive from './components/comprehensive'
import ChooseFor from './components/ChooseFor'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Hero />
      <CompaniesLogo />
      <EnergyPlans />
      <SimpleSteps />
      <Comprehensive />
      <ChooseFor />
      <Testimonials />
      <Faq />
      <Footer/>
    </>
  )
}

export default App

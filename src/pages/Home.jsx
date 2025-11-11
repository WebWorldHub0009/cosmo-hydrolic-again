import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import FeaturedProducts from '../components/FeaturedProducts'
import Faq from "../components/Faq"
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <FeaturedProducts/>
    <HowItWorks/>
    <StatsSection/>
    <Faq/>
    </>
  )
}

export default Home
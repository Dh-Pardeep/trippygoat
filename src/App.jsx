import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import About from './components/About'
import RoadMap from './components/RoadMap'
import GridImg from './components/GridImg'
import Mint from './components/Mint'
import Team from './components/Team'
import MyFooter from './components/common/MyFooter'

function App() {

  return (
    <>
      <div>
        <HeroSection />
        <About />
        <RoadMap />
        <GridImg />
        <Mint />
        <Team />
        <MyFooter/>
      </div>
    </>
  )
}

export default App

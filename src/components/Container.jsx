import React from 'react'
import NavigationContainer from './Navigation/NavigationContainer'
import Hero from './Hero/Hero'
import Featured from './Work/Featured'
import Footer from './Footer/Footer'

const Container = () => {
  return (
      <div>
          <NavigationContainer/>
      <Hero />
      <Featured />
      <Footer/>
      </div>
  )
}

export default Container
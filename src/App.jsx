import React from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/layouts/Footer'
import Home from './views/Home'
import Main from './views/Main'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer /> 
    </>
  )
}

export default App
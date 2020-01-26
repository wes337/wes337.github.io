import React, { useState, useEffect } from 'react'
import WebFontLoader from 'webfontloader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faPhone, faEnvelope, faHandPointDown, faTimes, faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import Spinner from './components/spinner'
import Home from './pages/home'
import About from './pages/about'
import CV from './pages/cv'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from './pages/footer'
import './app.scss'

library.add(fab, faChevronRight, faPhone, faEnvelope, faHandPointDown, faTimes, faCode, faEye)

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: [
          'Montserrat:300,400,500,600,700,800,900',
          'Open Sans:300,400,500,600,700,800,900'
        ]
      },
      loading: () => setLoading(true),
      active: () => setLoading(false),
    })
  }, [])

  if (loading) {
    return (
      <div className="app__loading">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="app">
      <Home />
      <About />
      <CV />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import EducationExperience from './pages/E&E.jsx'
import Skills from './pages/Skills.jsx'
import Works from './pages/Works.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Navbar />
      <Home />
      <Services />
      <EducationExperience />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  </StrictMode>,
)

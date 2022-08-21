import  { useContext } from 'react'
import './Layout.css';

import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Works from '../Works/Works';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import { ThemeContext, AppContextInterface } from '../../Context'

const Layout = () => {
  const { darkMode } = useContext(ThemeContext)  as AppContextInterface;
  
  return (
    <div className={['layout', darkMode ? 'theme-mode-dark':'theme-mode-light'].join(" ")}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Layout
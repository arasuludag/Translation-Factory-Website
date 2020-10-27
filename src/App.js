import React from 'react';
import {Element} from 'react-scroll'

import './components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Footer from "./components/Footer"



function App() {

  return (
    <div className="App">

        <Header />
        <Hero />
        <Element name="aboutUsElement" />
        <AboutUs/>
        <Element name="servicesElement" />
        <Services id="ServicesLoc"/>
        <Element name="contactUsElement" />
        <Contact id="ContactLoc"/>
        <Footer />

    </div>
  );
}

export default App;

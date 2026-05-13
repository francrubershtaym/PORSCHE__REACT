
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Porsche from './components/Porsche';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
const App = () => {
  const list= ['HOME PAGE', 'CATEGORY', 'ABOUT US'];
  const desc= ["The Porsche 911 GT3 R (or 911 GT3 R5) is a specialized race car designed for participation in various racing series, including GT championships and other international competitions.","It represents an enhanced version of the legendary Porsche 911, with a reinforced structure, improved aerodynamic characteristics, and a powerful engine to ensure maximum performance on the track."];
  const input=["First Name", "Last Name", "Email Address"];
  const contact = ["998 98 888 98 98","porshe@gmail.com","zipcode 32323232"];
  const social = ["facebook", "twitter", "instagram"];
  return (
    <div>
      <Navbar  list={list}/>
      <Banner />
      <Porsche desc={desc}/>
      <Gallery />
      <About />
      <Footer input={input} contact={contact} social={social}/>  
    </div>
  )
}

export default App

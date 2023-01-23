import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Slider from "../../components/Slider/Slider"


function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='home-container'>
        <Navbar/>
        <div className="top"><Slider/></div>
        <div className="center">Conetr</div>
        <div className="bottom">Bottom</div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
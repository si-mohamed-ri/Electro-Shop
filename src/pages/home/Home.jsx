import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Review from "../../components/Review/Review";
import Category from "../../components/Products/Category";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="container scrollbar scrollbar-primary">
          <div className="top">
            <Slider />
          </div>
          <div className="center">
            <Category />
          </div>
          <div className="bottom">
            <Review />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;

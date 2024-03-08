import React from "react";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import OurSkills from "../../components/OurSkills";
import Blog from "../../components/Blog";
import Visitor from "../../components/Visitor";
import Why_choose_us from "../../components/Why_choose_us";
import Because_family from "../../components/Because_family/Because_family";
const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <OurSkills/>
      <Because_family/>
      <Visitor/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default Home;

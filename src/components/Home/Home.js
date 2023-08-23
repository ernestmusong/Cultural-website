import React, { Component } from "react";
import banner from "../../hero-image.jpeg";
import Chief from "./ChiefProfile";
import BecudaExe from "./becudaExe";
import Title from "../Headings/Title";
import GreatIcons from "./GreatIcons";
import CurrentProjects from "./CurrentProjects";
import Counter from "./CountUpComponent";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
      <>
      <div className="banner mx-auto" style={{ backgroundImage: `url(${banner})` }}>
        <div className="text1-wrapper " style={{margin: "0 auto", marginBottom:"4rem", paddingTop:"4rem" }}>
            <h1 className="text1" >welcome to becuda</h1>
        </div>
      </div>
      <Title title="all our branches" />
       <Counter />
      <Title title="make befang great again" />
      <Chief />
      <Title title="becuda executive members" />
      <BecudaExe />
      <Title title="Some of Befang great icons" />
      <GreatIcons />
      <Title title="Latest News" />
      <LatestNews />
      <Title title="Ongoing projects" />
      <CurrentProjects />
      </>
    );
  }

  export default Home;
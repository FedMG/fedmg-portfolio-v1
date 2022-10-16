import React from "react";
import { Introduction } from "../items/Introduction.jsx";
import { Greeting } from "../items/Greeting.jsx";
import { LinkSection } from "../items/LinkSection.jsx";
import { CreateShape } from "../layouts/CreateShape.jsx";
import { waves } from "../refs/shapes.js";
import "../styles/routes/home.css";

const Home = () => {
  return (
    <div id="Home" className="section">
      <div className="home-subcontainer">
        <Greeting />
        <Introduction />
        <LinkSection />
      </div>
      <CreateShape data={waves.upside} />
    </div>
  );
};

export default Home;

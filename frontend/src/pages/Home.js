import React, { useState } from "react";
import Header from '../components/Header';
import Infobox from '../components/Infobox';
import ReactTooltip from "react-tooltip";
import MapChart from "../components/MapChart";
import "../index.css";

function Home() {
  const [content, setContent] = useState("");
  return (<div> 
    <Header />
    <Infobox text='The Covid-19 pandemic has had a devastating effect on the global tourism sector. According to a United Nations report,
                incoming tourism levels dropped between 60% and 80% worldwide in 2020, and only partially recovered in 2021.
            We hope this project will help you see new ways of discovering the world while helping local communities recover from the pandemic.
               Click on any continent below to get started!'/>
    <div className='container'>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>

  </div>);
}

export default Home;

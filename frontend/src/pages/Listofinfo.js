import React from 'react';
import { useNavigate } from "react-router-dom"; 

function Listofinfo() {
    let navigate = useNavigate();
  return (
  <body>
  <h2 onClick={() => {navigate("/Europe")}}> Europe </h2>
  
  <ul>
    <li>Spain</li>
    <li>Croatia</li>
    <li>Montenegro</li>
  </ul>  

  <h2 onClick={() => {navigate("/Asia")}}> Asia </h2>
  
  <ul>
    <li>Macao</li>
    <li>Phillipines</li>
    <li>India</li>
  </ul> 

  <h2 onClick={() => {navigate("/Africa")}}>Africa</h2>
  
  <ul>
    <li>Mauritius</li>
    <li>Mountains </li>
    <li>Ivory Coast</li>
  </ul> 

  <h2 onClick={() => {navigate("/Oceania")}}>Oceania</h2>
  
  <ul>
    <li>Fiji</li>
    <li>Samoa </li>
    <li>Vanuatu </li>
  </ul> 
  
  <h2 onClick={() => {navigate("/North%20America")}}>North America</h2>
  
  <ul>
    <li>Mexico</li>
    <li>Costa Rica </li>
    <li>Jamaica </li>
  </ul> 

  <h2 onClick={() => {navigate("/South%20America")}}>South America</h2>
  
  <ul>
    <li>Panama</li>
    <li>Argentina  </li>
    <li>Venezuela  </li>
  </ul> 
  
  </body>);
}

export default Listofinfo;

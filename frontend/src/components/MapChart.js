import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

const geoUrl = "https://piwodlaiwo.github.io/topojson//world-continents.json";

const MapChart = ({ setTooltipContent }) => {
  let navigate = useNavigate();
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 180 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const NAME = geo.properties.continent;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {navigate("/"+ geo.properties.continent)}}
                  style={{
                    default: {
                      fill: "#d3d3d3",
                      outline: "none"
                    },
                    hover: {
                      fill: "#349ceb",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#00008B",
                      outline: "none"   
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);

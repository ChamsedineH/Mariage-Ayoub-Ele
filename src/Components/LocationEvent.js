import React from "react";
import { locationData } from "../Data/LocationData";
import LEvent from "./LEvent";

const LocationEvent = (props) => {
  const lData = locationData;
  console.log(lData);

  return (
    <div>
      {lData.map((loc, index) => {
        return <LEvent key={index} loc={loc} />;
      })}
    </div>
  );
};

export default LocationEvent;

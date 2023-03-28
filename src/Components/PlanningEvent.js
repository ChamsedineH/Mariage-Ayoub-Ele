import React from 'react';
import { planningData } from '../Data/PlanningData';
import Event from './Event';
import "./PlanningEvent.css"

const PlanningEvent = (props) => {
    const planningEvents = planningData;
  
    return (
      <div>
        <h1 className='date'>Samedi 23 Septembre 2023</h1>
        {planningEvents.slice(0,4).map((planningevent, index) => {
          return <Event key={index} planningevent={planningevent} />;
        })}
        <h1 className='date'>Dimanche 24 Septembre 2023</h1>
        {planningEvents.slice(4,5).map((planningevent, index) => {
          return <Event key={index} planningevent={planningevent} />;
        })}
      </div>
    );
  };
  
  export default PlanningEvent;
  
import React from 'react';
import "./Event.css"

const Event = (props) => {
    return (
        
            <div className='eventbox'>
                <h2 className='heure'>{props.planningevent.heure}</h2>
                <h3 className='textp'>{props.planningevent.evenement}</h3>
                <span>-</span>
                <h3 className='textp'>{props.planningevent.lieu}</h3>
            </div>
        
    );
};

export default Event;
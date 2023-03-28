import React from "react";
import "./Location.css"

const LEvent = (props) => {
  return (
    <div>
      <img className="imgloc" src={props.loc.img} alt="" />
      <div className="locationbox">
        <h1 className="title">{props.loc.name}</h1>
        <h2 className="subtitle">Adresse</h2>
        <p>{props.loc.adresse}</p>
        <h2 className="subtitle">Accès Voiture</h2>
        <p>{props.loc.car}</p>
      </div>
    </div>
  );
};

export default LEvent;

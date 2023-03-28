import React from 'react';
import './Contactinfo.css'

const Contactinfo = () => {
    return (
        <div>
            <h1 className="contact">Nous Contacter</h1>
            <img src="./621A9882.jpg" alt="" className='imgcontact'/>
            <div className="contactbox">
                <p className="contactp">Si vous souhaitez plus d’informations, proposez des idées, faire des discours ou autre, nous vous invitons à contacter l’un de nos témoins:<br/>
                </p>
                <br/>
               <h3 className="nom">Eleonora : </h3> 
                <ul className='listc'>
                     <li>Antonio Fridella: 07 67 66 63 90</li>
                     <li>Soizic Boulhoud: 06 68 89 87 67</li>
                     <li>Elisa Benony: 06 23 32 18 75</li>
            
                 </ul>
            <br/>
            <h3 className="nom">Ayoub : </h3>
                <ul className='listc'>
                     <li>Walid Salhaoui: 06 99 41 87 51</li>
                     <li>Adrien Charles: 06 44 17 64 19</li>
                     <li>Chamsédine Hornn: 06 15 32 50 73</li>
                </ul>

            </div>
        </div>
    );
};

export default Contactinfo;
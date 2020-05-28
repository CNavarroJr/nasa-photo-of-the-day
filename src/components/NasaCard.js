import React from "react";


 const NasaCard = (props) => {
    return (
        <div className="nasa-card" >
        <div className="header">
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
        </div>
            <img src={props.imgUrl}alt="Nasa" />
             <p className="explanation">{props.explanation}</p>
             <h3 className="copyright">Copyright: {props.copyright}</h3>
        </div>
    )
};

export default NasaCard;
  

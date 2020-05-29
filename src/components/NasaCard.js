import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

 const NasaCard = (props) => {
     console.log("props", props);

     const { photo } = props;

//     return (
//         <div>
//             <div className="header">
//                 <CardTitle>{photo.title}</CardTitle>
//                 <p>{photo.date}</p>
//                 <img 
//                     className="image" alt="Nasa Photo" src={photo.url}/>
                
//                 <p>{photo.explanation}</p>
                
//                 <p>{photo.copyright}</p>
//             </div>    
//         </div>
//     )
// };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="title">{photo.title}</CardTitle>
                    <CardSubtitle className="date">{photo.date}</CardSubtitle>
                </CardBody>                
                    <img width="80%" src={photo.url} alt="Nasa Photo"/>
                <CardBody>
                    <CardText className="explanation">{photo.explanation}</CardText>
                    <CardText className="copyright">{photo.copyright}</CardText>
                </CardBody>
            </Card>
        </div>
    )
 };
export default NasaCard;
  

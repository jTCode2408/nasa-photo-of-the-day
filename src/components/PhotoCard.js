//will hold photo, title, date, explanation returned
//child of MainCard
//export photo card to MainCard
import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Row } from "reactstrap";


const PhotoCard = props =>{
console.log(props);
    return (
     
      <Col>
          <Card>
            <CardTitle> Today's Photo:  {props.title}  </CardTitle>
            <Col>
          <CardImg src = {props.image} alt= "NASA pic of the day" /> 
          </Col>
          <CardBody>
          <Row xs = "2">
          <CardSubtitle>Photo Decsription: </CardSubtitle>
            <CardText> {props.description} </CardText>
            
     <CardSubtitle>Date: </CardSubtitle>
     <CardSubtitle>{props.date} </CardSubtitle>
     </Row>
     </CardBody>
    </Card>
    </Col>
    
    );
}

export default PhotoCard;
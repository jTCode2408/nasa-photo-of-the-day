//will hold photo, title, date, explanation returned
//child of MainCard
//export photo card to MainCard
import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardSubtitle, Col, Row, Toast, ToastHeader, Spinner, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from "reactstrap";



const PhotoCard = props =>{
  const [dropdownOpen, setOpen] = useState(false);

      const toggle = () => setOpen(!dropdownOpen);
console.log(props);
    return (
      
      <Col>
          <Card>
            <div className = "p-3 bg-secondary my-2 rounded">
            <Toast>
              <ToastHeader> <h1>Today's Photo: </h1>
              <h2>{props.title} </h2> </ToastHeader>
              </Toast>
              </div>
            <Col>
          <CardImg src = {props.image} alt= "NASA pic of the day" /> 
          </Col>

          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret color = "info">
              Photo Link!
              </DropdownToggle>
              <DropdownMenu>
            
                <DropdownItem>
               {props.image}     
                </DropdownItem>
                </DropdownMenu>

          </ButtonDropdown>
         
          
      
          <CardBody>
          <Row xs = "2">
          <CardSubtitle> <Spinner color="primary" /> 
          <Alert color="success"> Photo Decsription: </Alert>
          </CardSubtitle>

            <Alert> {props.description}
             </Alert>
             
            </Row>
            <Row xs = "2">
     <CardSubtitle><Spinner color="success" /> 
     <Alert color = "primary"> Date: {props.date}</Alert>
      </CardSubtitle>
     </Row>
     </CardBody>
    </Card>
    </Col>
    
    );
}

export default PhotoCard;